
import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Innovators Inc.',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Implemented microservices architecture, improving system performance by 40%. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      id: 2,
      company: 'Digital Solutions Corp',
      position: 'Frontend Developer',
      location: 'New York, NY',
      period: 'Jun 2020 - Dec 2021',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with UX/UI designers to implement pixel-perfect designs. Optimized application performance and implemented automated testing, reducing bugs by 30%.'
    },
    {
      id: 3,
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      location: 'Austin, TX',
      period: 'Aug 2019 - May 2020',
      description: 'Built and maintained web applications using JavaScript, HTML, and CSS. Worked closely with senior developers to learn best practices. Contributed to the development of an e-commerce platform serving 10,000+ users.'
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-start space-x-8 group"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center glass-card group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 glass-card p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{exp.position}</h3>
                      <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                      <div className="font-medium">{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
