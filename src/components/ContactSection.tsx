import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        I'm open to opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <a href="mailto:someshtaiwade.17@gmail.com" className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow-primary transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Mail className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">someshtaiwade.17@gmail.com</p>
            </div>
          </a>
          <a href="https://wa.me/917719017326" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow-accent transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
              <Phone className="text-accent" size={22} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="font-medium text-foreground">+91 7719017326</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/somesh-devops/" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow-primary transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Linkedin className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-foreground">linkedin.com/in/somesh-devops</p>
            </div>
          </a>
          <a href="https://github.com/Somesh-DevOps-1" target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-glow-primary transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
              <Github className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="font-medium text-foreground">github.com/Somesh-DevOps-1</p>
            </div>
          </a>
          <div className="glass rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="text-primary" size={22} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">Nagpur, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:someshtaiwade.17@gmail.com"
          method="POST"
          encType="text/plain"
          className="glass rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full h-11 px-4 rounded-xl bg-secondary/80 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full h-11 px-4 rounded-xl bg-secondary/80 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-glow-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
