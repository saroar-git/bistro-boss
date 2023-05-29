import { FaCalendarAlt, FaCalendarDay, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { GiLoveLetter, GiWallet } from "react-icons/gi";
import { VscFeedback, VscHome, VscListSelection } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
      const [cart] = useCart();

      return (
            <div className="drawer drawer-mobile font-cinzel">
                  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet />

                  </div>
                  <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 bg-[#D1A054] uppercase font-semibold">

                              <li>
                                    <NavLink to='/dashboard/home'><FaHome className="text-xl" /> User Home</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/dashboard/reservation'><FaCalendarAlt className="text-xl" /> Reservation</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/dashboard/payment'><GiWallet className="text-xl" /> Payment history</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart className="text-xl" /> My Cart <div className="badge text-xs font-bold text-white -ml-1 mb-4 badge-outline">+{cart?.length || 0}</div></NavLink>
                              </li>
                              <li>
                                    <NavLink to='/dashboard/review'><VscFeedback className="text-xl" /> Add review</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/dashboard/booking'><FaCalendarDay className="text-xl" /> My Booking</NavLink>
                              </li>

                              <div className="divider"></div>

                              <li>
                                    <NavLink to='/'><VscHome className="text-2xl" /> Home</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/menu'><VscListSelection className="text-2xl" /> Menu</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/order/salad'><FaShoppingBag className="text-2xl" /> shop</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/contact'><GiLoveLetter className="text-2xl" /> contact</NavLink>
                              </li>
                        </ul>

                  </div>
            </div>
      );
};

export default Dashboard;