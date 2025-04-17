import { Outlet } from "react-router-dom";
import RegistrationHeader from "../components/RegistrationHeader";

const Registration = () => {
  return (
    <div className="registration">
      <RegistrationHeader />
      <div className="content flex justify-center pt-12">
        <Outlet />
      </div>
    </div>
  );
};
export default Registration;
