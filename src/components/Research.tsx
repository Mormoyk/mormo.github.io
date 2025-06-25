
import { BookOpen, Award, Users, Calendar } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Advanced Machine Learning Applications in Modern Computing",
      journal: "Journal of Advanced Computing",
      year: "2024",
      description: "Exploring novel applications of machine learning algorithms in distributed computing systems."
    },
    {
      title: "Quantum Computing: Bridging Theory and Practice",
      journal: "Quantum Research Quarterly",
      year: "2023",
      description: "A comprehensive study on the practical implementation of quantum algorithms in real-world scenarios."
    },
    {
      title: "Sustainable Technology Solutions for Smart Cities",
      journal: "Environmental Tech Review",
      year: "2023",
      description: "Investigating eco-friendly technological approaches for urban development and sustainability."
    }
  ];

  const achievements = [
    "Best Research Paper Award - Tech Conference 2024",
    "Outstanding Researcher Recognition - University 2023",
    "Innovation in Computing Award - Research Society 2023",
    "Young Researcher Fellowship - Science Foundation 2022"
  ];

  return (
    <section id="research" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Research & Publications
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Contributing to the advancement of technology through rigorous research and academic publications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Publications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Recent Publications</h3>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-purple-400 mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {pub.journal}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
            </div>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-purple-800/10 rounded-lg border border-purple-500/20"
                >
                  <Award className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Research Stats */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg p-6 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users size={20} />
                Research Impact
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">25+</div>
                  <div className="text-sm text-gray-400">Collaborations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">8+</div>
                  <div className="text-sm text-gray-400">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;
