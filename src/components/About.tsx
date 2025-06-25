
import { User, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a dedicated researcher and developer with a passion for pushing the boundaries of technology
            and sharing knowledge with the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Researcher</h3>
            <p className="text-gray-400">
              Conducting cutting-edge research in emerging technologies and contributing to academic publications.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovator</h3>
            <p className="text-gray-400">
              Building innovative solutions and projects that solve real-world problems through technology.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Educator</h3>
            <p className="text-gray-400">
              Sharing knowledge through YouTube content and helping others learn and grow in technology.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                My passion for technology began early, leading me to pursue advanced research in cutting-edge fields. 
                I believe in the power of collaboration and knowledge sharing to drive innovation forward.
              </p>
              <p className="text-gray-300">
                Through my research, projects, and YouTube channel, I aim to bridge the gap between complex 
                technical concepts and practical applications, making technology more accessible to everyone.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Research & Development</span>
                <span className="text-purple-400">95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full w-[95%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Project Management</span>
                <span className="text-purple-400">88%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full w-[88%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Content Creation</span>
                <span className="text-purple-400">92%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
