const skills = [
  "C",
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "SQL",
  "Git",
  "Linux",
  "AWS",
  "Docker",
  "Jenkins",
  "Kubernetes",
  "MongoDB",
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <span>02.</span>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;