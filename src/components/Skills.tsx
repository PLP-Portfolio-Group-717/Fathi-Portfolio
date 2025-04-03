
import { 
  Code, Database, Globe, Layout, 
  Server, ShieldCheck, Smartphone, Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-portfolio-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-portfolio-primary" />,
      skills: ["Java", "Python", "C++", "PHP", "JavaScript"]
    },
    {
      title: "Database Management",
      icon: <Database className="h-8 w-8 text-portfolio-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server", "Firebase"]
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="h-8 w-8 text-portfolio-primary" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Wireframing"]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="h-8 w-8 text-portfolio-primary" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "AWS"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-portfolio-primary" />,
      skills: ["React Native", "Flutter", "Android Development", "iOS Basics", "Mobile UI Design"]
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="h-8 w-8 text-portfolio-primary" />,
      skills: ["Network Security", "Encryption", "Vulnerability Assessment", "Security Protocols", "Ethical Hacking"]
    },
    {
      title: "Hardware & Networking",
      icon: <Cpu className="h-8 w-8 text-portfolio-primary" />,
      skills: ["Computer Architecture", "Network Administration", "Troubleshooting", "System Maintenance", "LAN/WAN Setup"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          As a third-year IT student, I've developed a diverse skill set through academic coursework, personal projects, and continuous learning.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card bg-white">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-portfolio-primary"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
