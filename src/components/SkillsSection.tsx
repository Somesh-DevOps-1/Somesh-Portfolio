const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "JSON", "Bash/Shell"],
  },
  {
    title: "Backend Technologies",
    skills: ["Django", "Django REST Framework", "FastAPI"],
  },
  {
    title: "Databases & GIS",
    skills: ["PostgreSQL", "PostGIS", "MySQL"],
  },
  {
    title: "AWS Cloud",
    skills: ["EC2", "IAM", "S3", "RDS", "Lambda", "EKS", "CloudWatch", "VPC"],
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Git", "Jenkins", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Monitoring & Tools",
    skills: ["Prometheus", "Grafana", "Postman", "VS Code", "Linux"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/50">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Technical <span className="text-gradient">Skills</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        A comprehensive toolkit spanning backend development, cloud infrastructure, and DevOps automation.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="glass rounded-2xl p-6 hover:shadow-glow-primary transition-all duration-300">
            <h3 className="font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
