import { CheckCircle, Palette, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import profilePicture from "@/assets/profile-picture.jpg";
import profilePicture from "../assets/images/profile_picture.jpg";




const About = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Canva", level: 85 },
    { name: "MS Office Suite", level: 92 },
    { name: "Project Management", level: 88 },
    { name: "Client Communication", level: 96 }
  ];

  const highlights = [
    {
      icon: Palette,
      title: "Creative Vision",
      description: "5+ years crafting compelling visual stories"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Delivered 200+ successful projects"
    },
    {
      icon: Zap,
      title: "Efficient Operations",
      description: "Streamlined workflows for busy entrepreneurs"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about design and dedicated to helping businesses thrive
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile and Description */}
          <div className="animate-fade-in">
            <div className="relative mb-8">
              <img 
                src={profilePicture}
                alt="Sarah Mitchell"
                className="w-64 h-64 rounded-full mx-auto object-cover shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce-gentle">
                <Palette className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brenda is a dynamic Virtual Assistant and Graphic Designer who excels at bringing structure and style to the digital workspace. 
                With a strong foundation in administrative support and visual design, she effortlessly balances creativity with efficiency. 
                From organizing emails and managing calendars to designing logos, brochures, and eye-catching social media content, Brenda brings precision, 
                creativity, and professionalism to every task. Her ability to stay organized while delivering high-quality visuals makes her an indispensable partner 
                for entrepreneurs, startups, and busy professionals.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a designer, Brenda has a keen eye for detail and a deep understanding of brand identity and visual storytelling. 
                She is proficient in tools like Adobe Creative Suite and Canva, which she uses to craft designs that are both functional and beautiful.
                 Whether it's developing client presentations or coordinating content schedules, Brenda approaches each project with enthusiasm and a problem-solving mindset, 
                 ensuring smooth workflows and striking results in every assignment.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <highlight.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-2xl border">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary mr-3" />
                <h4 className="text-lg font-semibold">What I Bring to Your Team</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Creative problem-solving with strategic thinking</li>
                <li>• Reliable communication and project management</li>
                <li>• Fast turnaround times without compromising quality</li>
                <li>• Collaborative approach to bring your vision to life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;