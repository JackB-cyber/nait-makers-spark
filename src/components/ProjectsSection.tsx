import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Users, Star, Calendar } from "lucide-react";
import projectShowcase from "@/assets/project-showcase.jpg";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Edmonton Transit Optimizer",
      description: "AI-powered route optimization system helping reduce commute times across the city.",
      status: "Active",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      members: 8,
      stars: 23,
      image: projectShowcase,
      category: "Civic Tech",
      lastUpdate: "2 days ago"
    },
    {
      id: 2,
      title: "Campus Energy Monitor",
      description: "IoT system tracking NAIT's energy consumption with real-time analytics dashboard.",
      status: "Active",
      tech: ["Arduino", "Node.js", "MongoDB", "D3.js"],
      members: 5,
      stars: 16,
      image: null,
      category: "Sustainability",
      lastUpdate: "1 week ago"
    },
    {
      id: 3,
      title: "Student Meal Planner",
      description: "Budget-friendly meal planning app designed specifically for NAIT students.",
      status: "Completed",
      tech: ["React Native", "Firebase", "Stripe"],
      members: 4,
      stars: 31,
      image: null,
      category: "Student Life",
      lastUpdate: "3 weeks ago"
    }
  ];

  const stats = [
    { label: "Active Projects", value: "12" },
    { label: "Completed", value: "28" },
    { label: "Contributors", value: "156" },
    { label: "Cities Impacted", value: "3" }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Github className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Open Source Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building the Future,
            <span className="block text-primary">One Commit at a Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our active projects tackling real-world challenges in Edmonton and beyond. 
            From civic innovation to campus solutions, every project is an opportunity to learn and impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border shadow-elegant">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-glow transition-smooth border-border hover:border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={project.status === 'Active' ? 'default' : 'secondary'} className="mb-2">
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent/30 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted/30 text-xs rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.members}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.lastUpdate}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;