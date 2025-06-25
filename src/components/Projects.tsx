
import { ExternalLink, Github, Code, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Research Assistant",
      description: "A sophisticated AI system that helps researchers analyze and synthesize academic papers, providing intelligent insights and recommendations.",
      tech: ["Python", "TensorFlow", "NLP", "React"],
      icon: <Code className="text-white" size={24} />,
      status: "Featured"
    },
    {
      title: "Quantum Algorithm Simulator",
      description: "A comprehensive simulator for quantum computing algorithms with visual representations and educational modules.",
      tech: ["Quantum Computing", "Python", "Qiskit", "Vue.js"],
      icon: <Zap className="text-white" size={24} />,
      status: "Research"
    },
    {
      title: "Secure Data Pipeline",
      description: "Enterprise-grade data processing pipeline with advanced encryption and real-time monitoring capabilities.",
      tech: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
      icon: <Shield className="text-white" size={24} />,
      status: "Production"
    },
    {
      title: "Smart Learning Platform",
      description: "Adaptive learning platform that personalizes education content based on individual learning patterns and preferences.",
      tech: ["React", "Python", "ML", "PostgreSQL"],
      icon: <Code className="text-white" size={24} />,
      status: "Beta"
    },
    {
      title: "Distributed Computing Framework",
      description: "High-performance computing framework for distributed processing of large-scale scientific computations.",
      tech: ["Go", "gRPC", "Redis", "Apache Kafka"],
      icon: <Zap className="text-white" size={24} />,
      status: "Open Source"
    },
    {
      title: "Blockchain Analytics Tool",
      description: "Advanced analytics platform for blockchain networks with real-time monitoring and predictive analytics.",
      tech: ["Solidity", "Web3.js", "React", "GraphQL"],
      icon: <Shield className="text-white" size={24} />,
      status: "Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-purple-600";
      case "Production": return "bg-green-600";
      case "Research": return "bg-blue-600";
      case "Beta": return "bg-yellow-600";
      case "Open Source": return "bg-pink-600";
      case "Development": return "bg-orange-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI, quantum computing, blockchain, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                  {project.icon}
                </div>
                <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm">
                  <ExternalLink size={16} />
                  Demo
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  <Github size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
