import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="application">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
