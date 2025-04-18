import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="main-navigation-bar w-[90%] mx-auto py-1 flex justify-between items-baseline">
        <div className="left">
          <Link to="/home" className="logo capitalize">
            herowear
          </Link>
        </div>
        <div className="middle flex gap-8">
          <Link className="text-[1.05vw] capitalize">Trendings</Link>
          <Link className="text-[1.05vw] capitalize">Products</Link>
          <Link className="text-[1.05vw] capitalize">Cart</Link>
          <Link className="text-[1.05vw] capitalize">Track Orders</Link>
        </div>
        <div className="right flex gap-8">
          <Link className="text-[1.05vw] capitalize">contact us</Link>
          <Link className="text-[1.05vw] capitalize">about us</Link>
          <Link className="text-[1.05vw] capitalize">user</Link>
          <Link className="text-[1.05vw] capitalize" to="/auth/sign-up">
            sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
