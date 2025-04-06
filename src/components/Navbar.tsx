
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">ADITYA</a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="text-white hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="text-white hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
