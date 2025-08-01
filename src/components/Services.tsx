import { 
  Palette, 
  FileText, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Globe,
  Mail,
  Settings
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const designServices = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand packages including logos, color schemes, and brand guidelines",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection"]
    },
    {
      icon: Globe,
      title: "Web & Digital Design",
      description: "Modern, responsive designs for websites, apps, and digital platforms",
      features: ["Website Design", "UI/UX Design", "Mobile App Design", "Digital Assets"]
    },
    {
      icon: FileText,
      title: "Print & Marketing Materials",
      description: "Professional print designs that make your business stand out",
      features: ["Business Cards", "Flyers & Posters", "Brochures", "Packaging Design"]
    },
    {
      icon: TrendingUp,
      title: "Social Media Graphics",
      description: "Engaging visuals that boost your social media presence",
      features: ["Instagram Posts", "Facebook Covers", "LinkedIn Banners", "Story Templates"]
    }
  ];

  const vaServices = [
    {
      icon: Calendar,
      title: "Administrative Support",
      description: "Comprehensive admin services to keep your business running smoothly",
      features: ["Scheduling", "Email Management", "Data Entry", "Document Preparation"]
    },
    {
      icon: MessageSquare,
      title: "Customer Service",
      description: "Professional customer support to enhance your client relationships",
      features: ["Live Chat Support", "Email Responses", "Order Processing", "Client Follow-ups"]
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Organized project coordination to ensure timely delivery",
      features: ["Task Management", "Timeline Planning", "Team Coordination", "Progress Tracking"]
    },
    {
      icon: Mail,
      title: "Content & Communication",
      description: "Content creation and communication management for your business",
      features: ["Content Writing", "Social Media Management", "Email Campaigns", "Blog Posts"]
    }
  ];

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <Card className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 bg-gradient-card border-0">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <service.icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
        <p className="text-muted-foreground text-sm">{service.description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From creative design solutions to efficient virtual assistance, I offer comprehensive services 
            to help your business thrive in the digital world.
          </p>
        </div>

        {/* Graphic Design Services */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <Palette className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-3xl font-bold">Graphic Design</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Assistant Services */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-3xl font-bold">Virtual Assistant</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vaServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life. 
              From initial concept to final delivery, I'm here to support your success.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;