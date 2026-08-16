import profileImage from "../assets/pushkarphoto1.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-small">
          👋 Hello, I'm
        </p>

        <h1>
          Pushkar <span>Gameti</span>
        </h1>

        <h2>
          Web Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using React, Node.js, JavaScript and modern cloud technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects →
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Pushkar-Gameti"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pushkar-gameti-101a682b8"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          
        </div>

      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img
            src={profileImage}
            alt="Pushkar"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;