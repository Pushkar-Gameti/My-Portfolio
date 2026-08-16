const projects = [
  {
    title: "QuickStay",
    description:
      "A modern room booking website with a responsive user interface.",
    technologies: ["React", "Bcrypt", "MongoDB", "Stripe", "Tailwind", "Clerk",  "Vercel"],
    github: "https://github.com/Pushkar-Gameti/QuickStay-FullStack",
    live: "https://quick-stay-full-stack-kwmq.vercel.app/"
  },

  {
    title: "Small React Projects",
    description:
      "A collection of small React projects demonstrating various concepts and techniques.",
    technologies: ["React", "Node.js", "SQL"],
    github: "https://github.com/Pushkar-Gameti/React-Js",
    live: "https://github.com/Pushkar-Gameti/React-Js"
  },

  {
    title: "Ansible Automation",
    description:
      "A project that automates server configuration and deployment using Ansible.",
    technologies: ["Ansible"],
    github: "https://github.com/Pushkar-Gameti/Ansible",
    live: "https://github.com/Pushkar-Gameti/Ansible"
  },

  {
    title: "Room Voyage",
    description:
      "A modern responsive room booking website built with a lovable-dev.",
    technologies: ["React", "CSS", "JavaScript", "Vite", "lovable-dev"],
    github: "https://github.com/Pushkar-Gameti/room-voyage",
    live: "https://room-voyage.lovable.app/"
  },

  {
    title: "Ecommerce Shopping Website",
    description:
      "A modern responsive e-commerce website built with React and Node.js which allows users to browse products, add them to the cart, and complete purchases.",
    technologies: ["React", "Node.js", "SQL"],
    github: "https://github.com/Pushkar-Gameti/React-Js/tree/main/ecommerce",
    live: "https://github.com/Pushkar-Gameti/React-Js/tree/main/ecommerce"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <span>03.</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-top">
              <span className="folder">📁</span>

              <div>
                <a href={project.github}>GitHub ↗</a>
              </div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a href={project.live} className="project-link">
              View Project →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;