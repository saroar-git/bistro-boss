import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
      const navItems = <>
            <li className="hover:btn hover:btn-outline hover:btn-primary"><Link to='/'>Home</Link></li>

            <li className="hover:btn hover:btn-outline hover:btn-primary"><Link to='/'>Contact Us</Link></li>

            <li className="hover:btn hover:btn-outline hover:btn-primary"><Link to='/'>Dashboard</Link></li>

            <li className="hover:btn hover:btn-outline hover:btn-primary"><Link to='/menu'>Our Menu</Link></li>

            <li className="hover:btn hover:btn-outline hover:btn-primary"><Link to='/order'>Make a Order</Link></li>

      </>;

      return (
            <div className="navbar md:px-16 fixed navigation z-10 md:pt-4">
                  <div className="navbar-start">
                        <div className="dropdown ">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                                    {navItems}
                              </ul>
                        </div>
                        <Link className="btn-ghost">
                              <h3 className="md:font-extrabold md:text-2xl text-lg font-bold text-white">BISTRO BOSS </h3>
                              <p className="md:text-lg text-xs md:font-semibold pl-2 text-white">R e s t a u r a n t</p>
                        </Link>
                  </div>

                  <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white font-bold uppercase">
                              {navItems}
                        </ul>
                  </div>
                  <div className="navbar-end">

                  </div>
            </div>
      );
};

export default NavBar;
