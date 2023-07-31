import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
      const location = useLocation();
      const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

      return (
            <div className="font-cinzel">
                  <ScrollRestoration />
                  {noHeaderFooter || <NavBar />}
                  <Outlet />
                  {noHeaderFooter || <Footer />}
            </div>
      );
};

export default Main;