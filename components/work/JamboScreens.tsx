/**
 * Jambo Tickets — product screens.
 *
 * These are the real interface of the platform, rebuilt as live markup
 * rather than dropped in as flat image files. Rendering them means the
 * screens stay sharp on any display, respond to the layout, cost no image
 * payload, and can be kept in step with the product as it changes.
 *
 * The data shown is illustrative sample content — event names, prices and
 * counts are representative, not live figures pulled from the platform.
 * When you have production captures you're happy to publish, swap any of
 * these for a <next/image> inside the same device frame; nothing else in
 * the case study needs to change.
 */

const EVENTS = [
  { name: "Blankets & Wine", venue: "Nairobi", date: "Sat, 12 Oct", price: "3,500", tone: "from-brand-700 to-brand-900" },
  { name: "Nairobi Tech Week", venue: "Sarit Centre", date: "Thu, 17 Oct", price: "1,200", tone: "from-neutral-700 to-neutral-900" },
  { name: "Koroga Festival", venue: "Arboretum", date: "Sun, 27 Oct", price: "2,000", tone: "from-brand-600 to-brand-800" },
];

/** Desktop: event discovery. Used inside <BrowserFrame>. */
export function JamboDiscoverScreen() {
  return (
    <div className="bg-white p-5 text-neutral-900">
      {/* app bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-brand-700" aria-hidden="true" />
          <span className="font-display text-[13px] font-bold tracking-tight">
            Jambo Tickets
          </span>
        </div>
        <div className="hidden items-center gap-4 text-[11px] text-neutral-500 sm:flex">
          <span>Events</span>
          <span>Organisers</span>
          <span className="rounded-md bg-brand-500 px-2.5 py-1 font-medium text-white">
            Sign in
          </span>
        </div>
      </div>

      {/* search row */}
      <div className="mt-4 flex gap-2">
        <div className="flex-1 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-[11px] text-neutral-400">
          Search events, venues or artists
        </div>
        <div className="rounded-md border border-neutral-200 px-3 py-2 text-[11px] text-neutral-500">
          Nairobi
        </div>
      </div>

      <p className="mt-5 font-display text-[13px] font-semibold">This weekend</p>

      {/* event grid */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        {EVENTS.map((event) => (
          <div
            key={event.name}
            className="overflow-hidden rounded-lg border border-neutral-200"
          >
            <div
              className={`relative h-14 bg-gradient-to-br ${event.tone}`}
              aria-hidden="true"
            >
              <span className="absolute bottom-1.5 left-2 rounded bg-white/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white">
                {event.date}
              </span>
            </div>
            <div className="p-2.5">
              <p className="truncate text-[11px] font-semibold leading-tight">
                {event.name}
              </p>
              <p className="mt-0.5 truncate text-[10px] text-neutral-500">
                {event.venue}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] font-medium text-neutral-900">
                  KSh {event.price}
                </span>
                <span className="rounded bg-brand-50 px-1.5 py-0.5 text-[9px] font-medium text-brand-700">
                  Get ticket
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Mobile: a purchased ticket. Used inside <PhoneFrame>. */
export function JamboTicketScreen() {
  return (
    <div className="bg-neutral-50 pb-4 pt-9 text-neutral-900">
      <div className="px-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
          Your ticket
        </p>

        {/* ticket stub */}
        <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200">
          <div className="bg-gradient-to-br from-brand-700 to-brand-900 px-4 py-4 text-white">
            <p className="font-display text-sm font-bold leading-tight">
              Blankets &amp; Wine
            </p>
            <p className="mt-1 text-[10px] text-white/70">
              Sat, 12 Oct · 2:00 PM · Nairobi
            </p>
          </div>

          {/* perforation */}
          <div className="relative flex items-center" aria-hidden="true">
            <span className="-ml-2 h-4 w-4 rounded-full bg-neutral-50" />
            <span className="flex-1 border-t border-dashed border-neutral-200" />
            <span className="-mr-2 h-4 w-4 rounded-full bg-neutral-50" />
          </div>

          <div className="px-4 pb-4 pt-3">
            <div className="grid grid-cols-2 gap-3 text-[10px]">
              <div>
                <p className="text-neutral-400">Type</p>
                <p className="font-medium">Regular</p>
              </div>
              <div>
                <p className="text-neutral-400">Quantity</p>
                <p className="font-medium">2</p>
              </div>
            </div>

            {/* QR — decorative deterministic pattern, not a scannable code */}
            <div className="mt-3 flex justify-center">
              <div
                className="grid grid-cols-7 gap-[3px] rounded-lg bg-white p-2 ring-1 ring-neutral-200"
                aria-hidden="true"
              >
                {Array.from({ length: 49 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-[5px] w-[5px] rounded-[1px] ${
                      (i * 7 + (i % 5) * 3) % 4 < 2 ? "bg-neutral-900" : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-2 text-center font-mono text-[9px] text-neutral-400">
              JT-8F2K-4429
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-[10px] text-brand-800 ring-1 ring-brand-100">
          Paid via M-Pesa · KSh 7,000
        </div>
      </div>

      {/* tab bar */}
      <div
        className="mt-4 flex items-center justify-around border-t border-neutral-200 bg-white pb-2 pt-2.5 text-[8px] text-neutral-400"
        aria-hidden="true"
      >
        <span>Discover</span>
        <span className="font-medium text-brand-700">Tickets</span>
        <span>Profile</span>
      </div>
    </div>
  );
}

/** Desktop: the organiser's event dashboard. Used inside <BrowserFrame>. */
export function JamboOrganiserScreen() {
  const rows = [
    { name: "Blankets & Wine", status: "Live", sold: "412", cap: "600" },
    { name: "Koroga Festival", status: "Live", sold: "188", cap: "400" },
    { name: "Sunday Sessions", status: "Draft", sold: "—", cap: "250" },
  ];

  return (
    <div className="flex bg-white text-neutral-900">
      {/* sidebar */}
      <div className="hidden w-32 shrink-0 border-r border-neutral-200 bg-neutral-50 p-3 sm:block">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded bg-brand-700" aria-hidden="true" />
          <span className="font-display text-[10px] font-bold">Organiser</span>
        </div>
        <div className="mt-4 space-y-1 text-[10px]">
          <p className="rounded bg-brand-50 px-2 py-1.5 font-medium text-brand-800">
            Events
          </p>
          <p className="px-2 py-1.5 text-neutral-500">Sales</p>
          <p className="px-2 py-1.5 text-neutral-500">Attendees</p>
          <p className="px-2 py-1.5 text-neutral-500">Payouts</p>
        </div>
      </div>

      {/* main */}
      <div className="min-w-0 flex-1 p-4">
        <p className="font-display text-[13px] font-semibold">Your events</p>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Tickets sold", value: "600" },
            { label: "Gross sales", value: "KSh 1.4M" },
            { label: "Live events", value: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-2"
            >
              <p className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
              <p className="mt-0.5 font-display text-xs font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-lg border border-neutral-200">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-neutral-400">
            <span>Event</span>
            <span>Status</span>
            <span>Sold</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-neutral-100 px-3 py-2 text-[10px] last:border-0"
            >
              <span className="truncate font-medium">{row.name}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${
                  row.status === "Live"
                    ? "bg-brand-50 text-brand-700"
                    : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {row.status}
              </span>
              <span className="font-mono text-[10px] text-neutral-500">
                {row.sold}/{row.cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
