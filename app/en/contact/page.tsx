import Section from "@/components/Section";

function InfoRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const Inner = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-white/70">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.18em] text-white/40">
          {label}
        </div>
        <div className="mt-1 text-sm text-white/85 leading-relaxed break-words">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {Inner}
    </a>
  ) : (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      {Inner}
    </div>
  );
}

export default function ContactPage() {
  const university =
    "School of Mechanical Engineering, Changwon National University";
  const email = "yoonsm@changwon.ac.kr";
  const phone = "+82) 055-213-3623";
  const address =
    "Changwon National University, Changwon, Republic of Korea (Building 50 Room 105)";

  const googleMapLink =
    "https://www.google.com/maps/search/?api=1&query=Changwon+National+University+Engineering+Experiment+Building+1&hl=en";
  const googleMapEmbed =
    "https://www.google.com/maps?q=Changwon+National+University+Engineering+Experiment+Building+1&output=embed&hl=en";

  return (
    <div className="min-h-screen bg-black">
      <Section title="Contact & Location" light>
        {/* ✅ items-stretch로 좌/우 높이 맞춤 */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 relative overflow-hidden h-full">
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm text-white/70 leading-relaxed">
                  For inquiries regarding graduate/undergraduate research student recruitment, research cooperation, and industry projects,
                  please contact the Director of Research (PI).
                </p>

                <div className="mt-6 grid gap-3">
                  <InfoRow
                    label="Email"
                    value={email}
                    href={`mailto:${email}`}
                    icon={<span>✉️</span>}
                  />
                  <InfoRow
                    label="Phone"
                    value={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    icon={<span>☎️</span>}
                  />
                  <InfoRow
                    label="Affiliation"
                    value={university}
                    icon={<span>🏛️</span>}
                  />
                  <InfoRow
                    label="Address"
                    value={address}
                    href={googleMapLink}
                    icon={<span>📍</span>}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={googleMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:border-white/30 transition"
                  >
                    View on Google Maps <span className="text-white/60">↗</span>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-5 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:border-white/25 transition"
                  >
                    Send Email <span className="text-white/60">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 h-full">
            {/* ✅ 카드 자체를 늘리고(min-h) + flex-col로 지도 영역이 남은 높이 채우게 */}
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden h-full min-h-[520px] flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="text-sm text-white/80">
                  Location Map
                  <span className="ml-2 text-xs text-white/50">
                    (interactive)
                  </span>
                </div>
                <a
                  href={googleMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-white/60 hover:text-white transition"
                >
                  Open ↗
                </a>
              </div>

              {/* ✅ aspect 박스 제거하고 남은 높이를 지도에 할당 */}
              <div className="flex-1 relative bg-black">
                <iframe
                  src={googleMapEmbed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-white/45">
              If the map does not load, use “Open ↗” to view it in Google Maps.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
