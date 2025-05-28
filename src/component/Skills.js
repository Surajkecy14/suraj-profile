import React from 'react';

const Skills = () => {
  const skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'MongoDB',
    'Node.js',
    'Express.js',
    'Responsive Design'
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
