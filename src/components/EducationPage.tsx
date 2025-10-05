
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
      activitiesAndSocieties: 'Member of IEEE Student Branch, Participated in hackathons and coding competitions',
    },
    {
      id: 2,
      degree: 'Musaeus College Colombo 07',
      institution: '',
      description: 'Advanced Level Examination',
      year: '2020 AL',
      location: '',
      activitiesAndSocieties: 'Member of Science Club, Participated in inter-school competitions',
      positionsHeld: 'Editor Of School Newspaper (Myusara) of Musaeus College Colombo 07 [2019 - 2020]
                      Main Organizer Of Drug Prevention of Musaeus College Colombo 07 [2018-2019]',
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
                  {item.activitiesAndSocieties && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Activities and societies:</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.activitiesAndSocieties}</p>
                    </div>
                  )}
                  {item.positionsHeld && (
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">Positions held:</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.positionsHeld}</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3 md:text-right">
                  <div className="space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">{item.year}</div>
                    {item.location && <div className="text-gray-600 dark:text-gray-400 text-sm">{item.location}</div>}
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
