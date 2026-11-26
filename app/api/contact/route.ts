import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    // Fails loudly in development rather than silently pretending the
    // inquiry was delivered when no key is configured.
    console.error(
      "RESEND_API_KEY is not set — contact form submissions cannot be emailed."
    );
    return NextResponse.json(
      { ok: false, errors: { _form: "Email delivery is not configured." } },
      { status: 500 }
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { ok: false, errors: { _form: "Could not send your message. Please try again." } },
      { status: 502 }
    );
  }
}
