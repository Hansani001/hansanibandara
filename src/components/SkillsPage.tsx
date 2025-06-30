
import React from 'react';

const SkillsPage = () => {
  const technicalSkills = [
    'Java', 'Ubuntu', 'SQLs', 'Python', 'C++', 'HTML/CSS','MongoDB'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management',
    'Critical Thinking', 'Leadership', 'Project Management', 'Analytical Thinking', 'Attention to Detail'
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'AWS', 'Firebase',
    'Figma', 'Jira', 'Slack', 'GitHub', 'MySQL Workbench'
  ];

  const SkillCard = ({ title, skills, icon }: { title: string; skills: string[]; icon: string }) => (
    <div className="glass-card p-4 sm:p-6 hover:bg-white/25 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect">
      <div className="text-center mb-4 sm:mb-6">
        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold gradient-text">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-600/20 dark:bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 dark:border-blue-400/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-200 hover:bg-blue-500/30 dark:hover:bg-blue-500/30 hover:text-blue-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCard
            title="Technical Skills"
            skills={technicalSkills}
            icon="💻"
          />
          
          <SkillCard
            title="Soft Skills"
            skills={softSkills}
            icon="🤝"
          />
          
          <SkillCard
            title="Tools"
            skills={tools}
            icon="🛠️"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
