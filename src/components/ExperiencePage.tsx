
import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {


      id: 1,
      company: ' Uga Resorts',
      position: 'System Engineer - Information Technology',
      location: 'Sri Lanka',
      period: 'Nov 2025 - Present ',
      description: 'As an Information Systems Engineer at Uga Resorts,I specialize in managing and optimizing key operational systems, including Oracle Cloud Opera, Oracle Symphony, and Microsoft 365 Administration, along with broader PMS, POS, and ERP platforms. I bring a proactive, solutions-driven mindset to implementing, configuring, and maintaining technology that enhances efficiency across departments. My role involves collaborating closely with operational teams, conducting system audits, supporting staff through training, and coordinating with vendors to ensure seamless integrations. I am committed to driving continuous improvement, strengthening data security, and exploring innovative technologies that elevate business performance and the overall guest experience.'
    },


     {  
      id: 2,
      company: 'Spa Ceylon Ayurveda Wellness',
      position: 'Junior Executive,Digital Transformation',
      location: 'Sri Lanka',
      period: 'Nov 2024 - Nov 2025',
      description: 'Coordinated digital transformation projects by collaborating with cross-functional teams and brand partners. Gathered technical and functional requirements, analyzed data to support decision-making, and identified opportunities for process improvement. Assisted in documenting solutions, training staff, and providing technical support for new digital systems.'
    },
    {
      id:3,
      company: ' London Stock Exchange Group (LSEG)',
      position: 'Intern, Project Management',
      location: 'Sri Lanka',
      period: 'Jan 2024 - July 2024',
      description: 'Gained hands-on experience in project management by supporting both the Millennium Technology Platform (MTP) and Development Infrastructure teams. Assisted project managers across all SDLC phases, contributing to planning, implementation, and monitoring. Maintained project documentation including burn down charts, Power BI dashboards, and status reports.Coordinated with testers for smooth infrastructure rollouts and used Jira for clarity code and release tracking. Facilitated agile ceremonies—Daily Scrums, Sprint Planning, Reviews, and Retrospectives—and documented meetings using Confluence with clear agendas and action items. Actively contributed to process improvement efforts, enhancing project efficiency and execution.'
    },
    {
      id: 4,
      company: 'Hong Kong and Shanghai Banking Corporation Limited (HSBC)',
      position: 'Customer Solutions Representative',
      location: 'Sri Lanka',
      period: 'Oct 2021  - Sep 2022',
      description:'Skilled in CRM systems and customer service tools, with experience handling inquiries, resolving issues, and ensuring client satisfaction. Managed underwriting service activities efficiently and responded to queries promptly. Strong communicator with proven problem-solving abilities and a customer-focused mindset.'
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
                <div className="flex-1 glass-card p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.position}</h3>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                      <div className="font-medium">{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
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
