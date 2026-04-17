import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-hero py-12">
    <div className="container text-center">
      <p className="text-primary-foreground/60 text-sm mb-4">
        Designed & Built by <span className="text-primary font-semibold">Somesh Taiwade</span>
      </p>
      <div className="flex justify-center gap-5 mb-4">
        <a href="https://github.com/Somesh-DevOps-1" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/somesh-devops/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary transition-colors"><Linkedin size={18} /></a>
        <a href="mailto:someshtaiwade.17@gmail.com" className="text-primary-foreground/40 hover:text-primary transition-colors"><Mail size={18} /></a>
      </div>
      <p className="text-primary-foreground/30 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
