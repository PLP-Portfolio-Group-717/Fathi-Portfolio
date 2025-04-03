
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, GitHub, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-slideRight">
            <h2 className="text-lg md:text-xl text-portfolio-primary font-semibold mb-4">
              Hello, I'm a
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-6">
              Student IT Professional
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              A passionate third-year IT student at KCA University, blending theoretical knowledge with practical skills to create innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                <GitHub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fadeIn">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-primary rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg">
                {/* Replace with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-portfolio-dark">3+ Years</p>
                <p className="text-sm text-gray-600">Learning Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
