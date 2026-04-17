import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Work <span className="text-gradient">Experience</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Professional experience building production-grade systems.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
          <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Briefcase size={14} className="text-primary-foreground" />
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">Junior Software Developer</h3>
              <span className="text-xs font-mono bg-accent/10 text-accent px-3 py-1 rounded-lg">Nov 2025 – Present</span>
            </div>
            <p className="text-primary font-medium mb-1">Ace Technologies, Nagpur</p>
            <p className="text-xs text-muted-foreground mb-4">(A subsidiary of Micronet Solution Spacetech)</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">▸</span> Designed and developed RESTful APIs using Python, Django REST Framework, PostgreSQL.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">▸</span> Architected scalable backend modules with JWT authentication, role-based access control, and CRUD services.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">▸</span> Deployed cloud infrastructure on AWS (EC2, S3, RDS) with automated CI/CD pipelines using Jenkins and Docker.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">▸</span> Collaborated with frontend team for React integration and implemented monitoring using CloudWatch.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
