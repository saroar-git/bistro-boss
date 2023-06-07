import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import img from '../assets/others/cupcake.gif';

const AdminRoute = ({ children }) => {
      const { user, loading } = useAuth();
      const [isAdmin, isAminLoading] = useAdmin();
      const location = useLocation();

      if (loading || isAminLoading) {
            return (
                  <div className="text-center">
                        <img
                              src={img}
                              alt="" className="w-1/2 mx-auto mb-4"
                        ></img>
                        <h3 className="text-3xl font-bold">Please Reload After 5 Second..</h3>
                  </div>
            );
      }

      if (user && isAdmin) {
            return children;
      }
      else {
            return <Navigate to="/" state={{ from: location }} replace></Navigate>;
      }
};

export default AdminRoute;