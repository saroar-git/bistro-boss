import { Link, useNavigate } from "react-router-dom";
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/login.png';
import img from '../../assets/others/authentication2.png';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Register = () => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
      const navigate = useNavigate();

      const onSubmit = data => {
            createUser(data.email, data.password)
                  .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);

                        updateUserProfile(data.name, data.photo)
                              .then(() => { })
                              .catch(error => console.error(error.message));

                        Swal.fire({
                              title: 'Registration Successful, please login',
                              showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                              },
                              hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                              }
                        });
                        reset();

                        logOut()
                              .then(() => {
                                    navigate('/login');
                              })
                              .catch(error => console.error(error.message));
                  })
                  .catch(error => console.error(error.message));
      };


      return (
            <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={bgImage}
                  bgImageAlt="the menu"
                  strength={-200}>

                  <Helmet>
                        <title>Bistro-Boss | Register</title>
                  </Helmet>

                  <div className="hero min-h-[600px]">
                        <img src={loginImg} alt="" className="md:w-8/12 w-11/12 my-[55px] shadow-2xl box-border border border-slate-300 rounded relative py-96 md:py-4" />
                        <div className='absolute'>

                              <div className="hero min-h-screen">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                          <div className="text-center lg:text-left">
                                                <img src={img} alt="" className='w-[450px] md:w-[500px]' />
                                          </div>
                                          <div className="card flex-shrink-0 w-full max-w-sm">

                                                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                                      <h2 className='text-center text-3xl font-bold'>Register</h2>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Name</span>
                                                            </label>
                                                            <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                                            {errors.name && <span className="text-red-600 text-center">name is required</span>}
                                                      </div>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Name</span>
                                                            </label>
                                                            <input type="text" name="photo" {...register("photo", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                                            {errors.name && <span className="text-red-600 text-center">photo url is required</span>}
                                                      </div>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Email</span>
                                                            </label>
                                                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                                            {errors.email && <span className="text-red-600 text-center">email is required</span>}
                                                      </div>

                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text">Password</span>
                                                            </label>
                                                            <input type="password"
                                                                  {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$/ })}
                                                                  placeholder="password" className="input input-bordered" />

                                                            {errors.password && <span className="text-red-600 text-center">password is required</span>}
                                                            {errors.password?.type === 'pattern' && <p className="text-red-600 text-center">password must be contain one uppercase, one lowercase, a number and at least 8 characters</p>}
                                                      </div>


                                                      <div className="form-control mt-6">
                                                            <input type="submit" value="Register" className="btn bg-[#D1A054] border-none text-white font-bold" />

                                                            <h4 className='text-[#D1A054] text-sm mt-2 font-semibold text-center'>Already registered? Go to <Link to='/login' className='underline text-lg'>Login.</Link></h4>
                                                      </div>
                                                      <div className="text-center">
                                                            <p>or sign in with</p>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div >
            </Parallax >
      );
};

export default Register;
