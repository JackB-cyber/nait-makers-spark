import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Handshake, Award, Github, Slack, Calendar, BookOpen } from "lucide-react";
import civicCollaboration from "@/assets/civic-collaboration.jpg";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "200+", label: "Active Members", color: "text-primary" },
    { icon: Award, value: "15", label: "City Partnerships", color: "text-accent-foreground" },
    { icon: Handshake, value: "50+", label: "Mentors", color: "text-secondary-foreground" },
    { icon: Heart, value: "1000+", label: "Hours Volunteered", color: "text-muted-foreground" }
  ];

  const communityFeatures = [
    {
      icon: Github,
      title: "Open Source Everything",
      description: "All our projects are open source. Learn from real code, contribute to meaningful projects."
    },
    {
      icon: Slack,
      title: "24/7 Community Chat",
      description: "Get help, share ideas, and connect with peers in our active Discord community."
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Weekly workshops, monthly hackathons, and networking events with industry professionals."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Curated tutorials, best practices, and mentorship programs for all skill levels."
    }
  ];

  const sponsors = [
    { name: "City of Edmonton", type: "Municipal Partner" },
    { name: "Startup Edmonton", type: "Community Partner" },
    { name: "NAIT Innovation", type: "Academic Partner" },
    { name: "TEC Edmonton", type: "Industry Partner" }
  ];

  return (
    <section id="community" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Join Our Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            More Than Code,
            <span className="block text-primary">We're Family</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join a vibrant community of students, mentors, and industry professionals 
            united by a passion for technology and positive impact.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border shadow-elegant">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={civicCollaboration} 
              alt="Students collaborating on civic tech projects"
              className="rounded-2xl shadow-elegant border border-border"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why Join NAIT Maker Space?
            </h3>
            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Join Discord
              </Button>
              <Button variant="outline" size="lg">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="bg-gradient-secondary p-8 md:p-12 rounded-2xl border border-accent/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Amazing Partners</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thanks to our partners who support our mission to create positive impact through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs">
                    {sponsor.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="premium" size="lg">
              <Handshake className="mr-2 w-5 h-5" />
              Sponsor Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;