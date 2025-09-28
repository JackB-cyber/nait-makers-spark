import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Zap } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Civic Tech Hackathon",
      description: "48-hour hackathon focusing on Edmonton's urban challenges",
      date: "March 15-17, 2024",
      time: "6:00 PM - 6:00 PM",
      location: "NAIT Main Campus, Room W111",
      participants: 45,
      maxParticipants: 60,
      type: "Hackathon",
      featured: true,
      prizes: "$5,000 total prizes"
    },
    {
      id: 2,
      title: "React Workshop Series",
      description: "Beginner-friendly introduction to modern React development",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Maker Space Lab",
      participants: 12,
      maxParticipants: 20,
      type: "Workshop",
      featured: false
    },
    {
      id: 3,
      title: "Industry Mentor Night",
      description: "Connect with Edmonton tech professionals and get career advice",
      date: "March 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Student Commons",
      participants: 28,
      maxParticipants: 40,
      type: "Networking",
      featured: false
    },
    {
      id: 4,
      title: "Project Showcase",
      description: "Demo day for completed student projects",
      date: "April 5, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "NAIT Auditorium",
      participants: 8,
      maxParticipants: 15,
      type: "Showcase",
      featured: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Hackathon': return 'bg-primary text-primary-foreground';
      case 'Workshop': return 'bg-accent text-accent-foreground';
      case 'Networking': return 'bg-secondary text-secondary-foreground';
      case 'Showcase': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Upcoming Events</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learn, Network,
            <span className="block text-primary">Build Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our community events, workshops, and hackathons. Whether you're just starting out 
            or looking to level up your skills, there's something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className={`group hover:shadow-glow transition-smooth ${event.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card to-accent/10' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  {event.featured && (
                    <div className="flex items-center text-primary">
                      <Zap className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth text-xl">
                  {event.title}
                </CardTitle>
                <CardDescription>
                  {event.description}
                </CardDescription>
                {event.prizes && (
                  <div className="mt-2 p-2 bg-primary/10 rounded-lg">
                    <span className="text-sm font-medium text-primary">🏆 {event.prizes}</span>
                  </div>
                )}
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-3 text-primary" />
                    {event.participants}/{event.maxParticipants} registered
                  </div>
                </div>

                {/* Registration Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Registration</span>
                    <span>{Math.round((event.participants / event.maxParticipants) * 100)}% full</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant={event.featured ? "hero" : "default"} 
                    size="sm" 
                    className="flex-1"
                    disabled={event.participants >= event.maxParticipants}
                  >
                    {event.participants >= event.maxParticipants ? "Full" : "Register"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View Full Calendar
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;