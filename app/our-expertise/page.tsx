import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"

function Block({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="font-semibold text-zinc-900">{title}</div>
      <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function OurExpertisePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
            <h1 className="text-3xl md:text-4xl font-semibold">Innovation through Interdisciplinary Collaborations</h1>
            <p className="text-zinc-300 mt-2">Navigate an AI-first world with our diverse expertise.</p>
          </div>
        </section>

        <Section>
          <div className="grid md:grid-cols-2 gap-6">
            <Block
              title="Healthcare, Phytopharmaceuticals & Ayurveda"
              points={[
                "Biomedical Data Analysis: omics, EHR, imaging",
                "ML & DL: NLP for records, CNNs for imaging",
                "Bioinformatics & Computational Biology",
                "NLP for literature and patient records",
                "Explainable AI, Pharmacovigilance Modeling",
              ]}
            />
            <Block
              title="Materials & Chemistry"
              points={[
                "Computational chemistry & materials informatics",
                "Generative models for inverse design",
                "High-throughput screening automation",
                "Graph Neural Networks (GNNs)",
                "Reinforcement learning for synthesis",
              ]}
            />
            <Block
              title="Engineering & Architecture"
              points={[
                "Generative design and topology optimization",
                "Computer vision for inspection and monitoring",
                "Sustainability modeling",
                "Predictive maintenance",
                "BIM integration & automation",
              ]}
            />
            <Block
              title="Blockchain & Supply Chain"
              points={[
                "Smart contracts, ledgers, consensus",
                "Demand forecasting & inventory with AI",
                "Anomaly detection & fraud prevention",
                "Optimization for logistics and routing",
                "Secure interoperability & data fusion",
              ]}
            />
            <Block
              title="Drones & Robotics"
              points={[
                "Autonomous navigation & SLAM",
                "Computer vision and 3D reconstruction",
                "Sensor fusion: GPS, LIDAR, IMU",
                "RL for task agents",
                "Edge AI on low-power devices",
              ]}
            />
            <Block
              title="AGI Development"
              points={[
                "Advanced ML & DL, continual learning",
                "Neuroscience-inspired computing & neuro-symbolic AI",
                "Systems & software for HPC and MLOps",
                "Language understanding, multimodal, reasoning",
                "Ethics, alignment, safety; human-AI interaction",
              ]}
            />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
