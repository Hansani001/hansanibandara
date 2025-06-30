
import React from 'react';

const SkillsPage = () => {
  const technicalSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 
    'HTML/CSS', 'SQL', 'MongoDB', 'Express.js', 'Git', 'REST APIs'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management',
    'Critical Thinking', 'Adaptability', 'Leadership', 'Project Management',
    'Analytical Thinking', 'Attention to Detail'
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'AWS', 'Firebase',
    'Figma', 'Jira', 'Slack', 'GitHub', 'MySQL Workbench', 'Photoshop'
  ];

  const SkillCard = ({ title, skills, icon }: { title: string; skills: string[]; icon: string }) => (
    <div className="glass-card p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] glow-effect">
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-2xl font-bold gradient-text">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-3 py-2 text-center text-sm font-medium text-blue-200 hover:bg-blue-500/30 hover:text-white transition-all duration-300 hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
