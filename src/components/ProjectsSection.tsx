
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
      image: "https://via.placeholder.com/400x300",
      description: "College project"
    },
    {
      id: 2,
      title: "Weather Station",
      category: ['arduino', 'python'],
      image: "https://via.placeholder.com/400x300",
      description: "IoT project"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: ['html'],
      image: "https://via.placeholder.com/400x300",
      description: "Personal project"
    },
    {
      id: 4,
      title: "Data Analysis Tool",
      category: ['python'],
      image: "https://via.placeholder.com/400x300",
      description: "Academic project"
    },
    {
      id: 5,
      title: "Smart Home System",
      category: ['arduino', 'electronics'],
      image: "https://via.placeholder.com/400x300",
      description: "IoT project"
    },
    {
      id: 6,
      title: "Machine Learning Model",
      category: ['python'],
      image: "https://via.placeholder.com/400x300",
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
