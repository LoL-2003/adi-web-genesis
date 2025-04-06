
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aditya Puri. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Electronics and Communication Engineer - Gogte Institute of Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
