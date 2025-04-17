import { Link } from "react-router-dom";

const RegistrationHeader = () => {
  return (
    <header className="">
      <nav className="py-1 w-[90%] mx-auto">
        <Link className="logo" to="/home">
          Herowear
        </Link>
      </nav>
    </header>
  );
};

export default RegistrationHeader;
