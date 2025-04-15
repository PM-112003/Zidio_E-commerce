function App() {
  return (
    <>
    <div className="main">
    <nav className="main-navigation-bar">
      <ul className="main-navigation-list">
        <li className="logo">
              <a href="#">HeroWear</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Trendings</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Products</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Cart</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Track Orders</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Contact Us</a>
        </li>
        <li className="main-navigation-links">
           <a href="#">Log In</a>
        </li>
        <p className="main-navigation-slash">/</p>
        <li className="main-navigation-links">
           <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
    <div className="home">
      <img className="home-img" src="home-image.png"/>
      <div className="home-content">
          <div className="home-content-big">
             <p className="title">
               Every Hero Requires A Suite
             </p>
             <p className="content">
                We provide you with out latest collections of superhero suites and goodies 
             </p>

          </div>
          <div className="home-content-small">
       
          </div>
          <div className="home-content-small">

          </div>
          <div className="home-content-small">

          </div>
          <div className="home-content-small">

          </div>
      </div>
    </div>
    
    </div>
    </>
  );
}

export default App;
