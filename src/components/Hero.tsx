
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Muntasir Mormo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-left">
            Researcher • Developer • Content Creator
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about advancing technology through research, building innovative projects, 
            and sharing knowledge with the global community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg animate-pulse-glow"
            >
              Explore My Work
              <ArrowDown size={20} />
            </button>
            
            <button className="px-8 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              size={32} 
              className="text-purple-400 mx-auto cursor-pointer hover:text-purple-300 transition-colors"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
