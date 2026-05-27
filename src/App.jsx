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

      </main>
     
    </div>
  )
}

export default App;