
import React from 'react';

const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science (Honours) in Information Systems Engineering',
      institution: 'Sri Lanka Institute Of Information Technology',
      year: '2021 - 2025',
      location: 'Colombo, Sri Lanka',
      description: 'Information Technology (IT) Specialized in Information Systems Engineering (ISE) degree',
      
    },
    {
      id: 2,
      degree: 'Musaeus College Colombo 07 ',
      description: 'Advanced Level Examination',
      year: '2020 AL',
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
              className="glass-card p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] glow-effect group"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.institution}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="space-y-3 md:text-right">
                  <div className="space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">{item.year}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{item.location}</div>
                    {item.gpa && (
                      <div className="text-green-600 dark:text-green-400 font-medium">GPA: {item.gpa}</div>
                    )}
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-600/20 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                    {item.id === 2 ? 'School' : (item.degree.includes('Certified') || item.degree.includes('Bootcamp') ? 'Certificate' : 'Degree')}
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
