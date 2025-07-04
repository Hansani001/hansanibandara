
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ReferencesPage = () => {
  const references = [
    {
      id: 1,
      name: 'Dasuni Nawinna',
      designation: 'Assistant Professor,Department of Computer Systems Engineering',
      company: 'Sri Lanka Institute of Information Technology.',
      email: 'dasuni.n@sliit.lk',
      phone: '+94773504553',

    },
    {
      id: 2,
      name: ' Prasanna Karunarathna',
      designation: 'Head Of Business Operation & Change Management',
      company: 'London Stock Exchange Group, Sri Lanka',
      email: 'prasanna.karunarathna@lseg.com',
      phone: '+94777660944',
    
    },
    
  ];

  return (
    <section id="references" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">References</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="glass-card p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect group"
            >
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {reference.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {reference.designation}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {reference.company}
                  </p>
                </div>
              <div className="space-y-3">
                </div>
                
                <div className="pt-4 border-t border-gray-300 dark:border-white/10 space-y-3">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Contact Information:</h4>
                  
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-600/20 transition-all duration-300 hover:scale-[1.02] group/contact"
                  >
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/contact:text-blue-700 dark:group-hover/contact:text-blue-300" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover/contact:text-gray-900 dark:group-hover/contact:text-white text-sm">
                      {reference.email}
                    </span>
                  </a>
                  
                  <a
                    href={`tel:${reference.phone}`}
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-600/20 transition-all duration-300 hover:scale-[1.02] group/contact"
                  >
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/contact:text-blue-700 dark:group-hover/contact:text-blue-300" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover/contact:text-gray-900 dark:group-hover/contact:text-white text-sm">
                      {reference.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            References are available upon request. Please feel free to contact any of the above individuals 
            for professional recommendations and detailed feedback about my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferencesPage;
