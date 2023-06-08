import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
      const { googleSignIn } = useAuth();
      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || "/";

      const handleGoogleLogin = () => {
            googleSignIn()
                  .then(result => {
                        const loggedInUser = result.user;
                        console.log(loggedInUser);
                        const saveUser = { name: loggedInUser.displayName, photo: loggedInUser.photoURL, email: loggedInUser.email };
                        fetch('https://bistro-boss-server-six-chi.vercel.app/users', {
                              method: 'POST',
                              headers: {
                                    'content-type': 'application/json'
                              },
                              body: JSON.stringify(saveUser)
                        })
                              .then(res => res.json())
                              .then(() => {
                                    navigate(from, { replace: true });
                              });
                  });
      };

      const handleGithubLogin = () => {
            Swal.fire({
                  title: 'Github Login Coming Soon..',
                  showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                  }
            });
      };

      const handleFacebookLogin = () => {
            Swal.fire({
                  title: 'Facebook Login Coming Soon..',
                  showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                  }
            });
      };

      return (

            <div className="text-center">
                  <div className="divider">or continue with</div>
                  <button onClick={handleFacebookLogin} className="border rounded-full p-3 border-black">
                        <FaFacebook />
                  </button>
                  <button onClick={handleGoogleLogin} className="border rounded-full p-3 border-black mx-4">
                        <FaGoogle />

                  </button>
                  <button onClick={handleGithubLogin} className="border rounded-full p-3 border-black">
                        <FaGithub />

                  </button>
            </div>
      );
};

export default SocialLogin;