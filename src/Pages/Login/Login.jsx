import { Parallax } from 'react-parallax';
import bgImage from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/login.png';
import img from '../../assets/others/authentication2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';
import { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
      const [disabled, setDisabled] = useState(true);
      const [error, setError] = useState("");

      const { signIn } = useAuth();
      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || "/";

      useEffect(() => {
            loadCaptchaEnginge(6);
      }, []);

      const handleValidateCaptcha = (e) => {
            const user_captcha_value = e.target.value;
            if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false);
            }
            else {
                  setDisabled(true);
            }
      };

      const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                        Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Login successful',
                              showConfirmButton: false,
                              timer: 1500
                        });
                        setError("");
                        navigate(from, { replace: true });
                  })
                  .catch(error => setError(error.message));
      };

      return (
            <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={bgImage}
                  bgImageAlt="the menu"
                  strength={-200}>

                  <Helmet>
                        <title>Bistro-Boss | Login</title>
                  </Helmet>

                  <div className="hero min-h-screen">
                        <img src={loginImg} alt="" className="md:w-8/12 w-11/12 my-6 shadow-2xl box-border border border-slate-300 rounded relative py-96 md:py-12" />
                        <div className='absolute'>

                              <div className="hero min-h-screen">
                                    <div className="hero-content flex-col lg:flex-row">
                                          <div className="text-center lg:text-left">
                                                <img src={img} alt="" className='w-[450px] md:w-[500px]' />
                                          </div>
                                          <div className="card flex-shrink-0 w-full max-w-sm">

                                                <form className="card-body" onSubmit={handleLogin}>
                                                      <h2 className='text-center text-3xl font-bold'>Login</h2>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Email</span>
                                                            </label>
                                                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                                      </div>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Password</span>
                                                            </label>
                                                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                                      </div>

                                                      <div className="form-control">
                                                            <label className="flex justify-center my-4 px-full border border-gray-300 rounded-3xl py-2 bg-[#FAF7F5]">
                                                                  <LoadCanvasTemplate />
                                                            </label>
                                                            <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha code" className="input input-bordered" />
                                                      </div>

                                                      <div className="form-control mt-6">
                                                            <input disabled={disabled} type="submit" value="Login" className="btn bg-[#D1A054] border-none text-white font-bold" />

                                                            <div className="text-center">
                                                                  <p className="text-red-600">{error}</p>
                                                            </div>

                                                            <h4 className='text-[#D1A054] text-sm mt-2 font-semibold text-center'>New here? Create a New <Link to='/register' className='underline text-lg'> Account.</Link></h4>
                                                      </div>
                                                      <SocialLogin />
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Parallax>
      );
};

export default Login;
