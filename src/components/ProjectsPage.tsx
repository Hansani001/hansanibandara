
import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: 'AI-Driven Passenger Tracking, Demand Forecasting,and Urban Traffic Optimization App',
      description: 'Developing a scalable fleet management dashboard using Python, React. Integrated AI/ML models for passenger demand forecasting and predictive maintenance. Focused on modular, flexible architecture to support future integrations.',
      technologies: ['React', 'Node.js', 'MongoDB', ' AI/ML models', 'Python'],
      timeline: '2024 Nov - Present',
      purpose: 'University Research ',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Revamping the Spa Ceylon Rewards App',
      description: 'As the key Digital Transformation and Technologies Lead for the project, I took ownership and led the full revamp of our existing loyalty app. Driving the initiative forward in close collaboration with my team, my lead, senior leadership, and other departments, I transformed it into a modern, data-driven platform aligned with our customer experience and retention goals. I reshaped the project’s direction and successfully delivered an integrated, performance-oriented solution..',
      technologies: ['Notion', 'Firebase'],
      timeline: '2025 Feb - Present',
      purpose: 'Company Project',
      status: 'Completed'
    },
    {
      id: 3,
      name: ' GARA Fashion online clothing store - Customer Management System ',
      description: 'A comprehensive business intelligence dashboard with data visualization, reporting, and predictive analytics.',
      technologies: ['Java', 'SQL', 'CSS'],
      timeline: '2023 August',
      purpose: 'University Project',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'Weather App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      timeline: '2 weeks',
      purpose: 'Learning Project',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-green-500 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400';
  };

  const getPurposeColor = (purpose: string) => {
    const colors = {
      'University Research ': 'bg-purple-200 dark:bg-purple-600/20 text-purple-800 dark:text-purple-400',
      'Personal Project': 'bg-blue-200 dark:bg-blue-600/20 text-blue-800 dark:text-blue-400',
      'Company Project': 'bg-green-200 dark:bg-green-600/20 text-green-800 dark:text-green-400',
      'Learning Project': 'bg-orange-200 dark:bg-orange-600/20 text-orange-800 dark:text-orange-400'
    };
    return colors[purpose as keyof typeof colors] || 'bg-gray-200 dark:bg-gray-600/20 text-gray-800 dark:text-gray-400';
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-200 dark:bg-blue-600/20 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-300 dark:hover:bg-blue-600/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Timeline:</span> {project.timeline}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPurposeColor(project.purpose)}`}>
                      {project.purpose}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
