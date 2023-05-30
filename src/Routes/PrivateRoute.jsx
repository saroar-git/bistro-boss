import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      const location = useLocation();

      if (loading) {
            return (
                  <div className="text-center">
                        <img
                              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/78796f69321565.5b7d0cbe71285.gif"
                              alt="" className="w-1/2 mx-auto mb-4"
                        ></img>
                        <h3 className="text-3xl font-bold">Please Reload After 10 Second..</h3>
                  </div>
            );
      }

      if (user) {
            return children;
      }
      else {
            return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
      }
};

export default PrivateRoute;