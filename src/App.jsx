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
           
             
            </div>
              <a 
               href="https://line.me/R/ti/p/@575kncik"
               target="_blank"
               className="line-btn"
               >
                LINE chat
               </a>
           
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

            <div className="project-content">
              <div className="featrued-badge">
                 ⭐ Featured Project
              </div>
                <h3>Coffee Shop Website</h3>

            <p>
              Modern coffee ordering website with Firebase realtime orders and
              LINE integration.
            </p>
            <a href="https://tui-coffee-app.vercel.app/"
            target="_blank"
            >
             Live Demo
            </a>
            </div>
            <div className="project-tags">
              <span>React</span>
               <span>Firebase</span>
                <span>LINE OA</span>
                 <span>Vercel</span>
            </div>
          
          </div>
            
          <div className="project-card">
 <img src="/images/sign-shop.jpg" alt="Sign Shop Website" />


          <div className="project-content">
              <div className="featrued-badge">
                 ⭐ Featured Project
              </div>
              <h3>Sign Shop Website</h3>

             <p>
              Clean business website for local sign shop with services, 
              portfolio and contact links. 

             </p>

             <a href="https://sign-shop.vercel.app/" target="_blank">

             Live Demo 
             </a>
          </div>

           <div className="project-tags">
              <span>React</span>
               <span>Responsive UI</span>
                <span>  CSS</span>
                 <span>Vercel</span>
            </div>
            
          </div>

           
        </div>
      </section>

       <section className="projects" id="projects">
       <h2>Web Applications</h2>

        <div className="project-grid">
           
         
           <div className="project-card">
 <img src="/images/mobile-app.jpg" alt="Mobile App" />


          <div className="project-content">
              <div className="featrued-badge">
                 ⭐ Featured Project
              </div>
              <h3>My To Do App</h3>

             <p>
              To Do List mobile app with React realtime database and responsive design for mobile devices.

             </p>

             <a href="https://react-to-do-list-five-beta.vercel.app/" target="_blank">

             Live Demo 
             </a>
          </div>

           <div className="project-tags">
              <span>React</span>
               <span>Responsive UI</span>
                <span>  CSS</span>
                 <span>Vercel</span>
            </div>
            
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

        <h2>Technologies I Use</h2>
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
              <p>Mobile-friendly websites</p>
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
       

       <footer className="footer">
        <h3>Tui</h3>
        <p>Frontend Developer - React , Clean Web Design</p>
        <p className="footer-copy">@ 2026 Tui. All rights reserved </p>
       </footer>
      </main>
     
    </div>
  )
}

export default App;