import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Employee Management System (EMS)",
    tech: ["Python", "Django", "PostgreSQL", "React", "Docker"],
    description:
      "A scalable Employee Management System Backend using Django REST Framework to manage employee records, attendance, leave, payroll, and document requests.",
    features: [
      "Employee CRUD & Role-Based Access (Admin / HR / Employee)",
      "Attendance System (Check-in / Check-out / Break)",
      "Leave Request & Payroll Management",
      "JWT Authentication & Secure APIs",
      "Email notifications for approvals",
    ],
    github: "https://github.com/Somesh-DevOps-1",
    live: "https://ems.acetechnologys.com/",
  },
  {
    title: "CI/CD Pipeline with Web Hosting",
    tech: ["GitHub", "Jenkins", "Docker", "AWS EC2"],
    description:
      "End-to-end automated deployment pipeline containerizing Django + PostgreSQL + React with Jenkins CI/CD on AWS EC2.",
    features: [
      "Containerized backend using Docker & Docker Compose",
      "Automated deployment using Jenkins CI/CD",
      "Hosted on AWS EC2 with SSL (Let's Encrypt)",
      "Environment-based configuration with .env files",
    ],
    github: "https://github.com/Somesh-DevOps-1",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-secondary/50">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Technical <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Real-world projects demonstrating backend architecture and DevOps
        expertise.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass rounded-2xl p-8 flex flex-col hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-accent font-bold mt-0.5">▸</span> {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {/* <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Github size={16} /> View Code
              </a> */}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
