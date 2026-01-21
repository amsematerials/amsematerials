import Section from "@/components/Section";

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <Section title="Research Areas">
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-1">1. High-Entropy Alloys (HEAs)</h3>
            <p className="text-white/70">
              Molecular dynamics simulations on CoCrCuFeNi and CoCrNi alloys
              focusing on grain-size effects, inverse Hall–Petch behavior,
              phase transformation (FCC↔HCP), and high-temperature deformation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">2. EMI Shielding Composites</h3>
            <p className="text-white/70">
              Basalt fiber–reinforced polymer composites with metal coatings
              for lightweight EMI shielding of future mobility, UAV, and
              defense platforms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">3. UAM & Defense Structures</h3>
            <p className="text-white/70">
              Structural evaluation of low-cost, low-weight components for UAM
              and defense applications using coupled MD–FEM simulations and
              AI-assisted material design.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
