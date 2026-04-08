import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Your Name</h1>
        <p>Full Stack Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm a passionate developer with experience in building web applications.
          I love creating user-friendly interfaces and solving complex problems.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Portfolio Website</h3>
          <p>A responsive portfolio website built with React and Vite.</p>
        </div>
        <div className="project">
          <h3>Project 2: Task Manager App</h3>
          <p>A full-stack task management application using MERN stack.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
      </section>
    </div>
  )
}

export default App
