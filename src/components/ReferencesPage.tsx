
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
      name: 'Michael Chen',
      designation: 'Lead Frontend Developer',
      company: 'Digital Solutions Corp',
      email: 'michael.chen@digitalsolutions.com',
      phone: '+1 (555) 234-5678',
    
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
              className="glass-card p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect group"
            >
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {reference.name}
                  </h3>
                  <p className="text-lg font-semibold text-white">
                    {reference.designation}
                  </p>
                  <p className="text-gray-400">
                    {reference.company}
                  </p>
                </div>
              <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Relationship:</span>
                    <span className="text-blue-400 font-medium">{reference.relationship}</span>
                  </div>  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Period:</span>
                    <span className="text-white">{reference.workPeriod}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Contact Information:</h4>
                  
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-blue-600/20 transition-all duration-300 hover:scale-[1.02] group/contact"
                  >
                    <Mail className="w-4 h-4 text-blue-400 group-hover/contact:text-blue-300" />
                    <span className="text-gray-300 group-hover/contact:text-white text-sm">
                      {reference.email}
                    </span>
                  </a>
                  
                  <a
                    href={`tel:${reference.phone}`}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-blue-600/20 transition-all duration-300 hover:scale-[1.02] group/contact"
                  >
                    <Phone className="w-4 h-4 text-blue-400 group-hover/contact:text-blue-300" />
                    <span className="text-gray-300 group-hover/contact:text-white text-sm">
                      {reference.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            References are available upon request. Please feel free to contact any of the above individuals 
            for professional recommendations and detailed feedback about my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferencesPage;
