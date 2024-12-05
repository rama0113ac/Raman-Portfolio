import React from 'react';
import './Skills.css';

const skillsData = [
  { skill: 'JavaScript', level: 85 },
  { skill: 'React', level: 90 },
  { skill: 'CSS', level: 75 },
  { skill: 'HTML', level: 95 },
  { skill: 'Node.js', level: 80 },
  { skill: 'Git & Version Control', level: 88 },
  { skill: 'Responsive Design', level: 82 },
  { skill: 'UI/UX Design', level: 78 }
];


const Skills = () => {
  return (
    <section className="skills-section container my-5">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="circular-progress">
              <svg className="circle" width="120" height="120">
                <circle
                  className="circle-background"
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  className="circle-progress"
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#0072ff"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="314.16" 
                  strokeDashoffset={(314.16 * (100 - skill.level)) / 100}
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <h3 className="skill-name">{skill.skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
