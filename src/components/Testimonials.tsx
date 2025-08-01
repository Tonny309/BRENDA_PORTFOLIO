import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import tonny1Avatar from "../assets/avatars/tonny1.jpg";
import tonny1Avatar from "../assets/avatars/tonny1.jpg";
import clemmohAvatar from "../assets/avatars/clemmoh.jpg";
import steveAvatar from "../assets/avatars/steve.jpg";
import joyAvatar from "../assets/avatars/joy.jpg";
import bethAvatar from "../assets/avatars/beth.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Antony Maingi",
      company: "Benchmark Distributors",
      role: "Marketing Director",
      content: "Brenda transformed our brand identity completely! Her creative vision and attention to detail exceeded our expectations. The new logo and marketing materials have significantly improved our brand recognition.",
      rating: 5,
      avatar: tonny1Avatar
    },
    {
      id: 2,
      name: "Clemment Musyoka",
      company: "Element Adventures",
      role: "CEO",
      content: "Working with Brenda was a game-changer for our startup. Not only did she design an amazing website, but her virtual assistant services helped streamline our operations. Highly recommend!",
      rating: 5,
      avatar: clemmohAvatar
    },
    {
      id: 3,
      name: "Joy Kimani",
      company: "Ajira Digital Program",
      role: "Owner",
      content: "Bree understood our farm-to-table concept perfectly and created branding that truly represents our values. The menu design and signage look absolutely beautiful. Our customers love the new look!",
      rating: 5,
      avatar: joyAvatar
    },
    {
      id: 4,
      name: "Steve Kawinzi",
      company: "Steve Tech",
      role: "Product Manager",
      content: "The UI design Brenda created for our fitness app is incredible. User engagement increased by 40% after implementing her designs. She really knows how to create interfaces that users love.",
      rating: 5,
      avatar: steveAvatar
    },
    {
      id: 5,
      name: "Beth Njoki",
      company: "Lifestyle Co.",
      role: "Social Media Manager",
      content: "Brenda's social media templates and graphics are absolutely stunning! Our engagement rates have never been higher. She perfectly captured our brand aesthetic and made it shine on social platforms.",
      rating: 5,
      avatar: bethAvatar
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working together
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="bg-gradient-card border-0 shadow-elegant animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                <StarRating rating={testimonials[currentIndex].rating} />
                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-primary font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnail Previews */}
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  index === currentIndex 
                    ? 'scale-105 opacity-100' 
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <Card className="w-48 bg-gradient-card border-0">
                  <CardContent className="p-4 text-center">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                    />
                    <h5 className="font-semibold text-sm">{testimonial.name}</h5>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;