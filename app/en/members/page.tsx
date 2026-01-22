// ✅ app/members/page.tsx (FINAL)

import Section from "@/components/Section";
import Image from "next/image";
import { professor, phds, students, Member } from "@/data/members.en";

function Divider() {
  return <div className="my-12 h-px w-full bg-white/10" />;
}

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex gap-6 items-start">
<div className="relative w-44 shrink-0 aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
  <Image
    src={m.photo}
    alt={m.nameEn}
    fill
    className="object-cover"
    sizes="176px"
  />
</div>

        {/* Text */}
        <div className="min-w-0">
          <div className="text-lg font-semibold text-white">
            {m.nameEn}
            {m.nameKr ? (
              <span className="ml-2 text-white/60 font-normal">{m.nameKr}</span>
            ) : null}
          </div>

          <div className="mt-1 text-sm text-teal-300/80">{m.role}</div>

          <div className="mt-4 space-y-2 text-sm text-white/75">
            {m.info.map((it, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-white/40">{it.label}</div>
                <div className="text-sm text-white/80 leading-relaxed">{it.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Section title="Members" light>
        {/* Professor */}
        <MemberCard m={professor} />

        <Divider />

        {/* Postdocs / PhDs */}
        <div className="grid md:grid-cols-2 gap-6">
          {phds.map((m) => (
            <MemberCard key={m.id} m={m} />
          ))}
        </div>

        <Divider />

        {/* Master's + Undergraduates (7) */}
        <div className="grid md:grid-cols-2 gap-6">
          {students.map((m) => (
            <MemberCard key={m.id} m={m} />
          ))}
        </div>
      </Section>
    </div>
  );
}
