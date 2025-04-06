
const EducationSection = () => {
  return (
    <section 
      id="education" 
      className="py-20 relative"
      style={{ 
        backgroundImage: 'url(https://www.shutterstock.com/image-illustration/3d-render-open-black-book-260nw-112905829.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">My Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/50"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {/* School */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-gray-300 mb-2">June 17, 2009 to March 8, 2019</p>
                    <h4 className="text-xl font-medium mb-2 text-white">Schooling</h4>
                    <p className="text-gray-400">
                      Sant Meera English Medium school<br />
                      Belgaum, Karnataka
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:hidden"></div>
              </div>
              
              {/* PUC */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:hidden"></div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 md:text-left">
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-gray-300 mb-2">May 23, 2019 to July 20, 2021</p>
                    <h4 className="text-xl font-medium mb-2 text-white">PU1 & PU2</h4>
                    <p className="text-gray-400">
                      Govindram Seksaria Science PU college<br />
                      Belgaum, Karnataka
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Engineering */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                  <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                    <p className="text-gray-300 mb-2">December 15, 2021 - Present</p>
                    <h4 className="text-xl font-medium mb-2 text-white">Engineering</h4>
                    <p className="text-gray-400">
                      Gogte Institute of Technology<br />
                      Belgaum, Karnataka
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
