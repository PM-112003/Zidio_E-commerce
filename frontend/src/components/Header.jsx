const Header = () => {
  return (
    <header>
      <nav className="main-navigation-bar w-[90%] mx-auto">
        <ul className="main-navigation-list">
          <div className="left">
            <li className="logo ">
              <a href="#">HeroWear</a>
            </li>
          </div>
          <div className="middle flex gap-6">
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
          </div>
          <div className="right flex gap-4">
            <li className="main-navigation-links">
              <a href="#">Contact Us</a>
            </li>
            <li className="main-navigation-links">
              <a href="">User</a>
            </li>
            <li className="main-navigation-links">
              <a href="#">Sign Up</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
