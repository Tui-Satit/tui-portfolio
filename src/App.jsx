import "./App.css"

function App() {
  return (
    <div>
      <nav className="navbar">
          <h3>Tui</h3>

          <div className="nav-links">
          <a href="#home">Home</a>
           <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
           
               <a 
               href="https://line.me/R/ti/p/@575kncik"
               target="_blank"
               className="line-btn"
               >
                LINE chat
               </a>
           
            </div>
            
      </nav>

      <main className="app">
          <section className="hero">
        <p className="hero-tag">
             👋 Hello, I'm
        </p>
     
        <h1>Tui Portfolio</h1>

        <h2>
          Frontend React Developer
        </h2>

        <p className="hero-desc">
           I build modern wesite for small businesses,
           coffee shops and portfolio websites.
        </p>

        <button>
          View My Work
        </button>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <img src="/images/coffee-shop.jpg" alt="Coffee Shop" />
            <h3>Coffee Shop Website</h3>

            <p>
              Modern coffee ordering website with Firebase realtime orders and
              LINE integration.
            </p>
            <a href="https://coffee-shop-website.vercel.app"
            target="_blank"
            >
             Live Demo
            </a>
          </div>
            
          <div className="project-card">
 <img src="/images/sign-shop.jpg" alt="Sign Shop Website" />

             <h3>Sign Shop Website</h3>

             <p>
              Clean business website for alocal sign shop with services, 
              portfolio and contact links. 

             </p>

             <a href="https://sign-shop.vercel.app/" target="_blank">

             Live Demo 
             </a>
          </div>
        </div>
      </section>

      <section className="about">
        <p className="about-tag">
             About Me
        </p>

        <h2>
             Passionate Frontend Developer
        </h2>

        <p className="about-desc">
           I enjoy building modern and clean web applications
           for small businesses, shops and portfolios.

           I focus on responsive UI, smooth user experience
           and modern frontend technologies.
        </p>

      </section>

      <section className="skills" id="skills">
        <p className="skills-tag">My Skills</p>

        <h2>Techologies I Use</h2>
          <div className="skills-grid">

            <div className="skills-card">
              <h3>⚛️ React</h3>
              <p>Modern forntend development</p>
            </div>

            <div className="skills-card">
              <h3>🟨 JavaScript</h3>
              <p>Interactive web applications</p>
            </div>

            <div className="skills-card">
              <h3>🔥 Firebase</h3>
              <p>Realtime database & backend</p>
            </div>

            <div className="skills-card">
              <h3>📱 Responsive UI</h3>
              <p>Modile-friendly websites</p>
            </div>

            <div className="skills-card">
              <h3>🚀 Vercel</h3>
              <p>Fast website deployment</p>
            </div>

            <div className="skills-card">
              <h3>🎨 UI Design</h3>
              <p>Clean and minimal interfaces</p>
            </div>
          </div>

      </section>

      </main>
     
    </div>
  )
}

export default App;