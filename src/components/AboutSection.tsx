import { Code, Cloud, Server, GitBranch } from "lucide-react";

const highlights = [
  { icon: Code, label: "Backend Dev", desc: "Python, Django REST, FastAPI" },
  { icon: Cloud, label: "AWS Cloud", desc: "EC2, S3, RDS, Lambda, EKS" },
  { icon: Server, label: "DevOps", desc: "Docker, Kubernetes, Jenkins" },
  { icon: GitBranch, label: "CI/CD", desc: "Automated pipelines & deployment" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        About <span className="text-gradient">Me</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        A passionate developer with hands-on experience in building production-grade backend systems and cloud infrastructure.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="group glass rounded-2xl p-6 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <h.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{h.label}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-foreground">Master of Computer Applications (MCA)</p>
              <p className="text-sm text-muted-foreground">Rashtrasant Tukdoji Maharaj Nagpur University • 2023 – 2025</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Bachelor of Computer Applications (BCA)</p>
              <p className="text-sm text-muted-foreground">Savitribai Phule Pune University • 2019 – 2022</p>
            </div>
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-accent font-bold">▸</span> Optimized app performance by 30%</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">▸</span> Reduced deployment time by 70% through automation</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">▸</span> Expertise in geospatial data processing</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">▸</span> Strong collaboration with frontend teams</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
