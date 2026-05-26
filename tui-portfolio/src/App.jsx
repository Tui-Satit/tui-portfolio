import "./App.css"

function App() {
  return (
    <div className="app">
      <nav className="navbar">
          <h3>Tui</h3>

          <div className="nav-links"></div>
          <a href="#home">Home</a>
           <a href="#projcts">Projects</a>
            <a href="#contact">Contact</a>
      </nav>
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
    </div>
  )
}

export default App;