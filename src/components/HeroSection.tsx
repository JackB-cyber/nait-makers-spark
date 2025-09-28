import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Lightbulb, Users } from "lucide-react";
import heroImage from "@/assets/hero-makerspace.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Code, value: "50+", label: "Active Projects" },
    { icon: Users, value: "200+", label: "Student Members" },
    { icon: Lightbulb, value: "15", label: "City Partnerships" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="NAIT Maker Space collaborative environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full border border-border/20 mb-6">
              <span className="text-sm font-medium">🚀 Now accepting new members</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent">
              Build Tomorrow's
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Solutions Today
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Join NAIT's premier student-led maker space where innovative minds collaborate 
              on real-world challenges. From civic tech to campus solutions, we're coding 
              the future of Edmonton together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Explore Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Floating Cards */}
            <div className="relative">
              <div className="absolute top-0 right-0 bg-card p-6 rounded-xl shadow-elegant border border-border/20 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-smooth">
                <h3 className="font-semibold mb-2">Smart City Dashboard</h3>
                <p className="text-sm text-muted-foreground">Real-time Edmonton traffic optimization</p>
                <div className="flex items-center mt-3 text-xs text-primary">
                  <Code className="w-3 h-3 mr-1" />
                  React • Python • ML
                </div>
              </div>
              
              <div className="absolute top-20 left-0 bg-card p-6 rounded-xl shadow-elegant border border-border/20 backdrop-blur-sm transform -rotate-2 hover:rotate-0 transition-smooth">
                <h3 className="font-semibold mb-2">Campus Sustainability</h3>
                <p className="text-sm text-muted-foreground">IoT sensors for energy monitoring</p>
                <div className="flex items-center mt-3 text-xs text-primary">
                  <Code className="w-3 h-3 mr-1" />
                  Arduino • Node.js
                </div>
              </div>

              <div className="absolute top-40 right-8 bg-card p-6 rounded-xl shadow-elegant border border-border/20 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-smooth">
                <h3 className="font-semibold mb-2">Student Connect</h3>
                <p className="text-sm text-muted-foreground">Peer-to-peer learning platform</p>
                <div className="flex items-center mt-3 text-xs text-primary">
                  <Code className="w-3 h-3 mr-1" />
                  Vue.js • Firebase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;