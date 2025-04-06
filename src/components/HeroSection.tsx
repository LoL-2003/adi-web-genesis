
import { useEffect, useState } from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const HeroSection = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // Use the uploaded image for the profile
    setProfileImage('/lovable-uploads/42af6808-440f-4010-82b8-00bcdd3d1524.png');
  }, []);

  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-shrink-0 w-full md:w-auto">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Aditya Puri"
                className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover mx-auto md:mx-0"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.currentTarget.src = 'https://via.placeholder.com/400x400';
                }}
              />
            ) : (
              <Avatar className="w-64 h-64 md:w-72 md:h-72 rounded-xl mx-auto md:mx-0">
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            )}
          </div>
          
          <div className="text-center md:text-left">
            <h6 className="text-white mb-2">Hello Everybody, I am</h6>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Aditya Puri</h1>
            <h4 className="text-xl md:text-2xl mb-3 text-white">Electronics and Communication Engineer</h4>
            <p className="text-gray-300 mb-6">I am currently studying in 6th sem</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full">
                  <i className="bi bi-calendar-date text-accent"></i>
                </span>
                <span className="text-white">10th April, 2003</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full">
                  <i className="bi bi-telephone text-accent"></i>
                </span>
                <a href="tel:+918431XXXXXX" className="text-white hover:text-primary transition-colors">+91 8431XXXXXX</a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full">
                  <i className="bi bi-envelope text-accent"></i>
                </span>
                <a href="mailto:adityapuri@ieee.org" className="text-white hover:text-primary transition-colors">adityapuri@ieee.org</a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-black/30 rounded-full">
                  <i className="bi bi-geo-alt text-accent"></i>
                </span>
                <a href="https://goo.gl/maps/yD36eUBdRH298Qnz7" className="text-white hover:text-primary transition-colors">Ganesh Nagar, Sambra</a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com/Aditya10_p" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <Twitter className="w-6 h-6 text-primary" />
              </a>
              <a href="https://www.instagram.com/adi_10._/" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-puri-268251245" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a href="https://github.com/Adi1042003" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <Github className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
