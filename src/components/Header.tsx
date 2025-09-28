import { Button } from "@/components/ui/button";
import { Menu, Github, Users, Calendar, Lightbulb } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "#projects", icon: Github },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Ideas", href: "#ideas", icon: Lightbulb },
    { name: "Community", href: "#community", icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">NAIT Maker Space</h1>
              <p className="text-xs text-muted-foreground">Code. Create. Collaborate.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="hero" className="hidden sm:flex">
              Join Community
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth p-2 rounded-lg hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <Button variant="hero" className="mt-2">
                Join Community
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;