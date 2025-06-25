
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
              © 2024 Muntasir Mormo. Made with 
              <Heart className="text-purple-400" size={16} />
              and cutting-edge technology.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="text-white" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
