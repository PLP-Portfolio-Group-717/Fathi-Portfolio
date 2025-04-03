
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Student Management System",
      description: "A comprehensive system for universities to manage student records, course enrollment, and academic performance.",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A mobile-responsive web application that provides real-time weather forecasts based on user location.",
      image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["JavaScript", "React", "OpenWeatherAPI", "CSS", "Axios"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A web application that allows users to track their workouts, set fitness goals, and monitor progress over time.",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["React", "Firebase", "Chart.js", "Material-UI", "PWA"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Here are some of the projects I've worked on during my academic journey and personal learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-portfolio-primary/90 text-white px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        variant="default"
                        className="bg-white text-gray-800 hover:bg-gray-100"
                      >
                        <a 
                          href={project.liveLink} 
                          className="flex items-center gap-1"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white/20"
                      >
                        <a 
                          href={project.githubLink} 
                          className="flex items-center gap-1"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
            <a href="#" className="flex items-center gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
