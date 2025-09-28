import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ThumbsUp, MessageCircle, Plus, TrendingUp, Building, GraduationCap } from "lucide-react";

const IdeasSection = () => {
  const ideas = [
    {
      id: 1,
      title: "Smart Parking for Downtown Edmonton",
      description: "Real-time parking availability system using IoT sensors to reduce traffic congestion",
      author: "Sarah Chen",
      type: "City Challenge",
      category: "Smart City",
      upvotes: 23,
      comments: 8,
      status: "Under Review",
      timeAgo: "2 days ago",
      difficulty: "Medium",
      estimatedTime: "3-4 months"
    },
    {
      id: 2,
      title: "NAIT Study Group Finder",
      description: "Platform to connect students for collaborative study sessions based on courses and schedules",
      author: "Marcus Johnson",
      type: "Student Idea",
      category: "Education",
      upvotes: 31,
      comments: 12,
      status: "In Development",
      timeAgo: "5 days ago",
      difficulty: "Easy",
      estimatedTime: "1-2 months"
    },
    {
      id: 3,
      title: "Edmonton Air Quality Monitor",
      description: "Community-driven air quality monitoring network with public dashboard",
      author: "City of Edmonton",
      type: "City Challenge",
      category: "Environment",
      upvotes: 18,
      comments: 6,
      status: "Open",
      timeAgo: "1 week ago",
      difficulty: "Hard",
      estimatedTime: "6+ months"
    },
    {
      id: 4,
      title: "Campus Food Waste Tracker",
      description: "App to track and reduce food waste in NAIT cafeterias and residences",
      author: "Alex Rivera",
      type: "Student Idea",
      category: "Sustainability",
      upvotes: 15,
      comments: 4,
      status: "Open",
      timeAgo: "2 weeks ago",
      difficulty: "Medium",
      estimatedTime: "2-3 months"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'bg-primary text-primary-foreground';
      case 'Under Review': return 'bg-muted text-muted-foreground';
      case 'Open': return 'bg-accent text-accent-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'City Challenge' ? Building : GraduationCap;
  };

  const stats = [
    { label: "Ideas Submitted", value: "47", icon: Lightbulb },
    { label: "In Development", value: "8", icon: TrendingUp },
    { label: "Community Votes", value: "324", icon: ThumbsUp },
    { label: "Active Discussions", value: "89", icon: MessageCircle }
  ];

  return (
    <section id="ideas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Community Ideas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Shape Edmonton's
            <span className="block text-primary">Digital Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Submit your ideas for civic improvements or campus solutions. Vote on proposals, 
            join discussions, and help prioritize what we build next.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border shadow-elegant">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Submit Idea CTA */}
        <div className="bg-gradient-secondary p-8 rounded-2xl border border-accent/30 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Have an Idea?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether it's solving a campus challenge or improving life in Edmonton, 
            your ideas can become real projects that make a difference.
          </p>
          <Button variant="hero" size="lg">
            <Plus className="mr-2 w-5 h-5" />
            Submit Your Idea
          </Button>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ideas.map((idea) => {
            const TypeIcon = getTypeIcon(idea.type);
            return (
              <Card key={idea.id} className="group hover:shadow-glow transition-smooth border-border hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <TypeIcon className="w-4 h-4 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {idea.type}
                      </Badge>
                      <Badge className={getDifficultyColor(idea.difficulty)} variant="secondary">
                        {idea.difficulty}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(idea.status)}>
                      {idea.status}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {idea.title}
                  </CardTitle>
                  <CardDescription>
                    {idea.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span>By {idea.author}</span>
                      <span>•</span>
                      <span>{idea.timeAgo}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {idea.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {idea.upvotes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {idea.comments}
                      </div>
                    </div>
                    <span className="text-xs">Est. {idea.estimatedTime}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Upvote
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Discuss
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Browse All Ideas
            <Lightbulb className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;