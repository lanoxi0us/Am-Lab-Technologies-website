import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validation/contact";

/**
 * Email delivery for the "Start a Project" form.
 *
 * Uses Resend (resend.com). The API key lives only in the environment
 * (`RESEND_API_KEY` in `.env.local`, or your host's env settings in
 * production) — never in source. `CONTACT_TO_EMAIL` is the inbox that
 * receives new inquiries; it defaults to the address in siteConfig if unset.
 *
 * Sender address: Resend's free tier can only send from its own
 * `onboarding@resend.dev` domain until you verify a domain you own (Resend
 * dashboard → Domains). Once `amlabs.co.ke` (or whichever domain the site
 * ends up on) is verified there, change RESEND_FROM_EMAIL below to something
 * like `Start a Project <inquiries@amlabs.co.ke>` for a proper "From".
 */

// Created lazily on first send. The Resend constructor throws when no API
// key is present, and `next build` imports this module while collecting
// page data for /api/contact — constructing it at module scope would fail
// the whole build whenever RESEND_API_KEY isn't set in the build env.
let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "AM Labs Website <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "alanmugambiofficial@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildEmailHtml(data: ContactFormValues) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", data.company || "—"],
    ["Project type", data.projectType],
    ["Budget", data.budget],
    ["Timeline", data.timeline],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#64748B;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:8px 0;color:#0F172A;font-size:14px;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:-apple-system,Segoe UI,Inter,sans-serif;max-width:560px;margin:0 auto;">
      <div style="background:#052E16;padding:24px 28px;border-radius:12px 12px 0 0;">
        <p style="margin:0;color:#6ECB9B;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">New project inquiry</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:20px;">AM Labs — Start a Project</h1>
      </div>
      <div style="border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px;padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
        <p style="margin:20px 0 6px;color:#64748B;font-size:13px;">Project description</p>
        <p style="margin:0;color:#0F172A;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
          data.projectDescription
        )}</p>
      </div>
    </div>`;
}

export async function sendContactEmail(data: ContactFormValues) {
  // The Resend SDK returns { data, error } rather than throwing on API
  // errors (bad key, unverified sender, rate limit, etc.) — checking
  // `error` explicitly matters here, otherwise a failed send is
  // indistinguishable from a successful one to the caller.
  const { data: result, error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New project inquiry — ${data.name} (${data.projectType})`,
    html: buildEmailHtml(data),
  });

  if (error) {
    throw new Error(`Resend rejected the email: ${error.message}`);
  }

  return result;
}
