# AM Labs

Marketing site for AM Labs — a Kenya-based software company.

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.
No CMS, no database, no auth: content lives as typed data in `lib/content/`
so a CMS can be swapped in later without a redesign.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Contact form email setup (Resend)

The contact form posts to `/api/contact`, validates the request with Zod, and sends it through Resend. The visitor's email is set as `Reply-To`, so replying to an inquiry goes back to that visitor. `CONTACT_TO_EMAIL` is the inbox that receives inquiries; `RESEND_FROM_EMAIL` is the sender shown on the email.

### Current V3 email settings

Checked on 2026-11-26. The API key value is intentionally not recorded here.

| Setting | Current value | Used for |
|---|---|---|
| `RESEND_API_KEY` in `.env.local` | Present | Authenticates the site with Resend; presence does not prove the key is valid. |
| `CONTACT_TO_EMAIL` in `.env.local` | `alanmugambiofficial@gmail.com` | Current destination inbox for project inquiries. |
| `RESEND_FROM_EMAIL` in `.env.local` | `AM Labs Website <onboarding@resend.dev>` | Current sender. This is Resend's test sender. |
| Public contact email and fallback recipient in `lib/content/site.ts` | `alanmugambiofficial@gmail.com` | Displayed on the site and used if `CONTACT_TO_EMAIL` is absent. `.env.example` matches. |

The receiving inbox, displayed contact email, and fallback recipient are now aligned to `alanmugambiofficial@gmail.com`. `CONTACT_TO_EMAIL` overrides the fallback, so keep it set to this same address in local and production environments.

The current `onboarding@resend.dev` sender is restricted to test messages sent to the email address associated with your Resend account. Since the configured destination is `alanmugambiofficial@gmail.com`, requests can be rejected unless that is also the email on your Resend account. Verify a domain you own and use a sender on that domain before accepting public inquiries. See [Resend's resend.dev restriction](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).

### Step-by-step setup

1. **Confirm the receiving inbox.** V3 is currently set to `alanmugambiofficial@gmail.com` for both inquiry delivery and the public contact link. If you keep this address, no further email-address change is needed. If it changes, update `CONTACT_TO_EMAIL` in `.env.local`, `contact.email` in `lib/content/site.ts`, and `.env.example` together. The recipient can be Gmail; it does not need to be on the sending domain.

2. **Sign in to the right Resend account.** Go to [Resend](https://resend.com/login) and sign in to the account/team that owns the website's sending domain. The login email is not set in this project and may differ from the destination inbox.

3. **Add a sending domain.** The site currently uses `https://amlabs.co.ke` as its canonical domain. If you control its DNS, Resend recommends isolating transactional mail on a subdomain; a suitable candidate is `send.amlabs.co.ke`. Otherwise use a domain you control. In Resend, open **Domains → Add Domain**, enter the chosen domain or subdomain, and select an available sending region. See [Resend's domain setup guide](https://resend.com/docs/add-a-domain).

4. **Add Resend's DNS records.** In the domain's Resend dashboard, copy the records shown for verification and sending (such as DKIM, SPF, and the return path) into the DNS provider where the domain is managed. Copy the record names and values exactly, then return to Resend and start verification. Keep existing website and mail records intact; if an SPF record already exists, follow the DNS provider's and Resend's instructions instead of creating a second SPF record.

5. **Wait for verification.** Continue when Resend shows the domain as verified and sending-enabled. DNS propagation can take time. If a record remains pending, compare the DNS entry with the exact value in Resend and use its verification status/errors to troubleshoot. Add or confirm a DMARC record for the domain as part of launch preparation.

6. **Create a restricted API key.** In Resend, open **API Keys → Create API Key**. Name it `AM Labs website`, choose **Sending access**, and restrict it to the verified sending domain. Copy the key when Resend shows it; the key value is only shown once. See [Resend's API-key guide](https://resend.com/docs/create-an-api-key). The existing local key is present, but create a fresh key for launch because the project notes say the earlier key was shared during setup.

7. **Set the local environment values.** In the project-root `.env.local`, set the three values below. Replace the example recipient with the inbox confirmed in step 1. Use a `From` address at the exact domain you verified. For `send.amlabs.co.ke`, for example:

   ```env
   RESEND_API_KEY=re_replace_with_your_new_key
   CONTACT_TO_EMAIL=alanmugambiofficial@gmail.com
   RESEND_FROM_EMAIL="AM Labs Website <inquiries@send.amlabs.co.ke>"
   ```

   Keep `.env.local` private and out of source control. The sending address does not need its own mailbox for this form; the recipient inbox must exist. The form's `Reply-To` is the customer's submitted email.

8. **Restart the local site and submit a real test inquiry.** Restart `npm run dev` after changing `.env.local`. Open `/contact` and submit the form with a valid name, email, phone, project type, description of at least 20 characters, budget, and timeline.

9. **Confirm both Resend and the inbox.** In Resend, open **Emails**, find the test message, and check its status and details. Then check the destination inbox, including Spam/Junk and Promotions. Resend's `Delivered` status means the recipient's mail server accepted the message; it does not guarantee that the message landed in the main inbox. See [Resend's email troubleshooting guide](https://resend.com/docs/knowledge-base/what-if-an-email-says-delivered-but-the-recipient-has-not-received-it).

10. **Set production environment variables and test again.** In the hosting provider's project settings, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `RESEND_FROM_EMAIL` to the Production environment, then redeploy. `.env.local` is not deployed with the site. Submit another inquiry on the live domain and check both the live inbox and Resend's Emails dashboard.

11. **Finish the public-launch protections.** Add spam protection (none is currently wired into the form), such as a honeypot or a CAPTCHA provider. After confirming the new key works in local and production environments, remove the old Resend key from the dashboard if it is no longer needed.

## Design system

| Piece | Where |
|---|---|
| Colour, type scale, radii, shadows | `tailwind.config.ts` |
| Textures, brand motifs, global base | `app/globals.css` |
| Typefaces | `lib/fonts.ts`, files in `public/fonts/` |
| Logo (mark + lockup) | `components/brand/Logo.tsx` |
| Section shell (tone / spacing / texture) | `components/ui/Section.tsx` |
| Motion variants + stagger | `components/motion/ScrollReveal.tsx` |
| Bespoke icon set | `components/ui/CapabilityIcons.tsx` |
| Device chrome | `components/ui/DeviceFrame.tsx` |
| Jambo Tickets product screens | `components/work/JamboScreens.tsx` |

Everything is visible on one page at **`/style-guide`** (noindex, not in nav).

### Typefaces

- **Plus Jakarta Sans** — display/headings
- **Inter** — body
- **Geist Mono** — small technical labels, step numbers, tags

All three are SIL OFL 1.1 and self-hosted as variable `woff2`. See
`public/fonts/LICENSES.md`.

### Colour principle

Green is an accent and a dark-surface colour — never a light-section
background flood. Each page uses at most two dark sections, spaced apart.
`brand-800` (`#0D5538`) is sampled from the logo and is the authoritative
logo green.

## Things to replace before launch

1. **`lib/content/site.ts`** — confirm the published email, phone and
   WhatsApp number.
2. **Email delivery uses Resend.** Follow the step-by-step checklist in
   [Contact form email setup](#contact-form-email-setup-resend). The recipient
   and public contact email now match. The sender is still Resend's test sender,
   and the form has no spam protection yet.
3. **`app/layout.tsx`** — `siteUrl` is set to `https://amlabs.co.ke`. Update
   if the domain differs.
4. **`components/brand/Logo.tsx`** — the mark is clean vector geometry traced
   from the AM Labs print collateral. If you get the original vector file
   from the designer, swap the `d` attribute; nothing else changes.
5. **`components/work/JamboScreens.tsx`** — the Jambo Tickets screens are
   rendered markup with illustrative sample data (event names, prices and
   counts are representative, not live figures). When you have production
   captures you're happy to publish, drop a `next/image` inside the same
   device frame.

## Content

No statistics, testimonials, client logos or awards appear anywhere on the
site, by design — nothing on it claims more than the company can currently
substantiate.
