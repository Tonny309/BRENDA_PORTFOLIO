import { useState } from "react";
import { Filter, ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import projectBranding from "../assets/breetech.jpg";
import projectSocial from "../assets/poster_Design.jpg";
import projectWeb from "../assets/projectweb.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "SteveTech Brand Identity",
      category: "branding",
      image: projectBranding,
      description: "Complete brand identity design for a tech startup including logo, business cards, and brand guidelines.",
      tags: ["Logo Design", "Brand Guidelines", "Print Design"],
      client: "Steve Tech.",
      year: "2024",
      details: "This project involved creating a modern, tech-forward brand identity that would appeal to both B2B clients and end consumers. The color palette combines deep blues with vibrant accents to convey trust and innovation."
    },
    {
      id: 2,
      title: "Poster Design",
      category: "social",
      image: projectSocial,
      description: "Developing emotion-evoking posters and banners that captivate audiences and communicate powerful messages for brands, events, and social causes.",
      tags: ["Social Media", "Template Design", "Marketing"],
      client: "Ajira Club.",
      year: "2025",
      details: "Developed a cohesive social media poster system with over 50 unique templates for Instagram posts, stories, and Facebook covers — contributing to a 150% boost in engagement within 3 months."
    },
    {
      id: 3,
      title: "E-commerce Website Design",
      category: "web",
      image: projectWeb,
      description: "Modern, responsive website design for an online fashion retailer with focus on user experience.",
      tags: ["Web Design", "UI/UX", "E-commerce"],
      client: "Benchmark Distributors.",
      year: "2025",
      details: "A mobile-first e-commerce design that reduced bounce rate by 40% and increased conversions by 25%. Features include intuitive navigation, quick product search, and streamlined checkout process."
    },
    {
      id: 4,
      title: "Restaurant Brand Package",
      category: "branding",
      image: projectBranding,
      description: "Comprehensive branding package for a farm-to-table restaurant including logo, menu design, and signage.",
      tags: ["Restaurant Branding", "Menu Design", "Signage"],
      client: "Green Table Restaurant",
      year: "2023",
      details: "Created a warm, organic brand identity that reflects the restaurant's commitment to local ingredients and sustainable practices. The design system spans from business cards to exterior signage."
    },
    {
      id: 5,
      title: "Fitness App Interface",
      category: "web",
      image: projectWeb,
      description: "Clean, motivational UI design for a fitness tracking mobile application.",
      tags: ["Mobile App", "UI Design", "Fitness"],
      client: "FitTrack Pro",
      year: "2023",
      details: "Designed an intuitive fitness app interface that motivates users to achieve their goals. Features progress tracking, workout planning, and social sharing capabilities."
    },
    {
      id: 6,
      title: "Marketing Materials Set",
      category: "social",
      image: projectSocial,
      description: "Complete set of marketing materials for a business conference including banners, flyers, and digital assets.",
      tags: ["Event Marketing", "Print Design", "Digital Assets"],
      client: "Element adventures.",
      year: "2024",
      details: "Comprehensive marketing package for a major business conference, including registration materials, speaker graphics, and venue signage. Helped achieve 300% attendance increase."
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Web Design" },
    { id: "social", label: "Social Media" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectModal = ({ project }: { project: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-lg shadow-card"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Project Details</h4>
              <p className="text-muted-foreground">{project.details}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Client</h4>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Year</h4>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of my recent work showcasing creativity, functionality, and results-driven design solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="transition-all duration-300"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 bg-gradient-card border-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <ProjectModal project={project} />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group-hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create something amazing. 
            Let's discuss your next project and bring your vision to life.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;