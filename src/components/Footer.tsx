import { Github, Twitter, Linkedin, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    community: [
      { name: "Join Discord", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Events", href: "#events" },
      { name: "Mentorship", href: "#" }
    ],
    resources: [
      { name: "Project Guidelines", href: "#" },
      { name: "Learning Path", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Blog", href: "#" }
    ],
    partners: [
      { name: "City of Edmonton", href: "#" },
      { name: "NAIT Innovation", href: "#" },
      { name: "Startup Edmonton", href: "#" },
      { name: "Sponsor Us", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@naitmakersspace.ca", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NM</span>
              </div>
              <div>
                <h3 className="font-bold">NAIT Maker Space</h3>
                <p className="text-xs text-muted-foreground">Code. Create. Collaborate.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Building tomorrow's solutions through student-led innovation and community partnerships.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                NAIT Main Campus, Edmonton AB
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Open Weekdays 9AM-9PM
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Partners</h4>
            <ul className="space-y-2">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-secondary p-6 rounded-xl border border-accent/30 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get notified about new projects, events, and opportunities.
              </p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-border bg-background text-sm w-64"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 NAIT Maker Space. Building the future, one project at a time.
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;