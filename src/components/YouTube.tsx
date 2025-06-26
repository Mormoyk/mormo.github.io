
import { Play } from 'lucide-react';

const YouTube = () => {
  const videos = [
    {
      title: "Understanding Quantum Computing: From Theory to Practice",
      duration: "24:15",
      thumbnail: "quantum-computing"
    },
    {
      title: "Building AI Applications with Modern Frameworks",
      duration: "18:42",
      thumbnail: "ai-frameworks"
    },
    {
      title: "Deep Dive into Blockchain Technology",
      duration: "31:20",
      thumbnail: "blockchain-tech"
    },
    {
      title: "Machine Learning Best Practices and Tips",
      duration: "15:30",
      thumbnail: "ml-tips"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            YouTube Channel
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Sharing knowledge and insights about cutting-edge technology, research, and development.
          </p>
        </div>

        {/* Latest Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Latest Videos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-purple-700/30 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 w-16 h-16 bg-purple-600/80 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 text-sm leading-tight group-hover:text-purple-300 transition-colors">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe for More Content</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our community of learners and stay updated with the latest in technology, research, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.youtube.com/@MuntasirMormo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Play size={20} />
              Subscribe on YouTube
            </a>
            <a
              href="https://www.youtube.com/@MuntasirMormo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              View All Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
