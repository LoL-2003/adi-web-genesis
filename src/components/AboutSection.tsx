
import { Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://www.smartprix.com/bytes/wp-content/uploads/2022/06/MacBook-Air.png)' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">About Myself</h2>
          
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg mb-10">
            <p className="text-gray-200 mb-6 text-lg">
              I am an ELECTRONICS AND COMMUNICATION ENGINEER, I am currently studying at the GOGTE INSTITUTE OF
              TECHNOLOGY, BELGAUM. I completed my PUC from GOVIND RAM SEKSARIA SCIENCE PU COLLEGE, BELAGAVI. And I
              completed my schooling at SANT MEERA ENGLISH MEDIUM SCHOOL, BELGAUM.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/70 transition-colors">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-white">1-10 TH</h4>
              <p className="text-gray-300">SCHOOL</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/70 transition-colors">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-white">PU1 & PU2</h4>
              <p className="text-gray-300">PUC</p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/70 transition-colors">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-medium mb-2 text-white">7th sem</h4>
              <p className="text-gray-300">ENGINEERING</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
