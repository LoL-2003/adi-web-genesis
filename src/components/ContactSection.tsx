
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Send,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About Me */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">About Me</h3>
              <p className="text-gray-300 mb-4">
                Do you want to be even more successful? Learn to love learning and growth. 
                The more effort you put into improving your skills, the more you'll grow as a person.
              </p>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} ADITYA PURI
              </p>
            </div>
            
            {/* Message Me */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Message Me
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded flex items-center gap-2 hover:bg-primary/80 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Follow Me</h3>
              <p className="text-gray-300 mb-6">Let us be social</p>
              
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/Adi1042003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <Github className="w-8 h-8 text-white mb-2" />
                  <span className="text-sm text-gray-300">GitHub</span>
                </a>
                
                <a 
                  href="https://wa.me/+918431748007?text=_hello_%20_Aditya_%20_Puri_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <i className="bi bi-whatsapp text-3xl text-green-500 mb-1"></i>
                  <span className="text-sm text-gray-300">WhatsApp</span>
                </a>
                
                <a 
                  href="https://www.snapchat.com/add/aditya10_p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <i className="bi bi-snapchat text-3xl text-yellow-400 mb-1"></i>
                  <span className="text-sm text-gray-300">Snapchat</span>
                </a>
                
                <a 
                  href="https://twitter.com/Aditya10_p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <Twitter className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-sm text-gray-300">Twitter</span>
                </a>
                
                <a 
                  href="https://discord.gg/kaxZpsnf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <i className="bi bi-discord text-3xl text-indigo-400 mb-1"></i>
                  <span className="text-sm text-gray-300">Discord</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/adi.puri.161" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded bg-gray-800 social-icon-hover"
                >
                  <Facebook className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-300">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
