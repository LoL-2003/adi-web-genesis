
import { useState } from 'react';

type ProjectCategory = 'all' | 'arduino' | 'html' | 'python' | 'electronics';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory[];
  image: string;
  description: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Multi functional robo",
      category: ['arduino', 'electronics'],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      description: "College project"
    },
    {
      id: 2,
      title: "Weather Station",
      category: ['arduino', 'python'],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      description: "IoT project"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: ['html'],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      description: "Personal project"
    },
    {
      id: 4,
      title: "Data Analysis Tool",
      category: ['python'],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      description: "Academic project"
    },
    {
      id: 5,
      title: "Smart Home System",
      category: ['arduino', 'electronics'],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "IoT project"
    },
    {
      id: 6,
      title: "Machine Learning Model",
      category: ['python'],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      description: "Research project"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            My Projects
            <span className="ml-2 inline-flex">
              <i className="bi bi-code-slash text-primary"></i>
            </span>
          </h2>
          <p className="text-gray-300">I am extremely in love with Coding</p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('arduino')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'arduino' 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Arduino
          </button>
          <button 
            onClick={() => setActiveFilter('html')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'html' 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            HTML & CSS
          </button>
          <button 
            onClick={() => setActiveFilter('python')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'python' 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Python
          </button>
          <button 
            onClick={() => setActiveFilter('electronics')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeFilter === 'electronics' 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Electronics
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.error(`Image failed to load: ${project.image}`);
                  e.currentTarget.src = 'https://via.placeholder.com/400x300';
                }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
