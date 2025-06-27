
import React from 'react';

const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2015 - 2019',
      location: 'California, USA',
      description: 'Graduated Magna Cum Laude with a focus on software engineering and web development. Completed coursework in algorithms, data structures, database systems, and software architecture.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      year: '2021',
      location: 'Online Certification',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS. Covers security, scalability, and cost optimization best practices.',
      gpa: null
    },
    {
      id: 3,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2019',
      location: 'San Francisco, CA',
      description: 'Intensive 12-week program covering modern web development technologies including React, Node.js, MongoDB, and deployment strategies. Built 5 full-stack applications.',
      gpa: null
    },
    {
      id: 4,
      degree: 'Google Cloud Professional Developer',
      institution: 'Google Cloud Platform',
      year: '2022',
      location: 'Online Certification',
      description: 'Certification validating skills in developing, deploying, and monitoring applications on Google Cloud Platform using best practices.',
      gpa: null
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] glow-effect group"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-white">
                    {item.institution}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="space-y-3 md:text-right">
                  <div className="space-y-1">
                    <div className="text-blue-400 font-semibold">{item.year}</div>
                    <div className="text-gray-400 text-sm">{item.location}</div>
                    {item.gpa && (
                      <div className="text-green-400 font-medium">GPA: {item.gpa}</div>
                    )}
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                    {item.degree.includes('Certified') || item.degree.includes('Bootcamp') ? 'Certificate' : 'Degree'}
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

export default EducationPage;
