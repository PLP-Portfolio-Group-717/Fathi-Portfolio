
import { Book, Briefcase, GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-slideRight">
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-dark">
              A dedicated IT student with a passion for technology and innovation
            </h3>
            <p className="text-gray-600 mb-6">
              I am currently in my third year of IT studies at KCA University, where I'm developing a strong foundation in both theoretical knowledge and practical skills. My academic journey has equipped me with expertise in various programming languages, database management, and system design.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond the classroom, I'm constantly expanding my knowledge through personal projects, online courses, and industry certifications. I believe in the power of technology to solve real-world problems and aim to contribute to this field through innovative solutions.
            </p>
            <p className="text-gray-600">
              I'm particularly interested in [your specific areas of interest in IT - e.g., web development, cybersecurity, data science, etc.] and am actively seeking opportunities to apply my skills in these areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slideUp">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-portfolio-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-portfolio-dark">Personal Info</h4>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Name:</span> Your Name</li>
                <li><span className="font-medium">Age:</span> Your Age</li>
                <li><span className="font-medium">Location:</span> Nairobi, Kenya</li>
                <li><span className="font-medium">Email:</span> your.email@example.com</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-portfolio-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-portfolio-dark">Education</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <p className="font-medium">Bachelor of IT</p>
                  <p>KCA University</p>
                  <p className="text-sm text-gray-500">2021 - Present</p>
                </li>
                <li>
                  <p className="font-medium">High School Diploma</p>
                  <p>Your High School</p>
                  <p className="text-sm text-gray-500">2017 - 2020</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-portfolio-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-portfolio-dark">Courses & Certifications</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Web Development Bootcamp</li>
                <li>Introduction to Cybersecurity</li>
                <li>Database Management Systems</li>
                <li>Network Administration Fundamentals</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-portfolio-primary/10 rounded-md flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-portfolio-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-portfolio-dark">Experience</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <p className="font-medium">IT Intern</p>
                  <p>Company Name</p>
                  <p className="text-sm text-gray-500">Summer 2023</p>
                </li>
                <li>
                  <p className="font-medium">Student Assistant</p>
                  <p>KCA University IT Department</p>
                  <p className="text-sm text-gray-500">2022 - Present</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
