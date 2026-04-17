import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-slide-in-left">
            <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Somesh Ravindra{" "}
              <span className="text-gradient">Taiwade</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-2 font-medium">
              Backend Developer | Python | Django REST | DevOps | AWS Cloud
            </p>
            <p className="text-primary-foreground/60 max-w-lg mb-8 leading-relaxed">
              Results-driven developer specializing in scalable RESTful APIs, CI/CD pipelines,
              containerization, and AWS cloud infrastructure. Optimized performance by 30% and
              reduced deployment time by 70%.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold shadow-glow-primary hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="/Somesh-Taiwade-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-8 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
              >
                Download CV
              </a>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Somesh-DevOps-1" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/somesh-devops/" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:someshtaiwade.17@gmail.com"
                className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Mail size={22} />
              </a>
              <a href="https://wa.me/917719017326" target="_blank" rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone size={22} />
              </a>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-primary animate-float">
                <img src={profileImg} alt="Somesh Taiwade" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-mono text-sm font-semibold shadow-glow-accent">
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
