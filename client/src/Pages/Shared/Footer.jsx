import { Link } from 'react-router-dom';
import facebook from '../../assets/icon/fb.png';
import instagram from '../../assets/icon/ins.png';
import twitter from '../../assets/icon/twitter.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
      return (
            <footer>
                  <div className="md:flex text-white">
                        <div className="md:w-1/2 bg-[#1F2937] p-8 md:text-right">
                              <h2 className="footer-title text-2xl">CONTACT US</h2>

                              <p className='md:text-lg text-sm mt-6'>123 ABS Street, Uni 21, Bangladesh</p>

                              <p className="md:text-lg text-sm my-2">+88 123456789</p>

                              <p className="md:text-lg text-sm mb-2">Mon - Fri: 08:00 - 22:00</p>

                              <p className='md:text-lg text-sm'>Sat - Sun: 10:00 - 23:00</p>
                        </div>

                        <div className="md:w-1/2 bg-[#111827] p-8">
                              <h2 className="footer-title text-2xl">Follow US</h2>
                              <p className="md:mt-6 mt-3 text-xs md:text-base">Join us on social media</p>

                              <div className="flex items-center gap-5 mt-4">
                                    <Link><LazyLoadImage src={facebook} effect="blur"
                                          loading='lazy' alt="" className='w-5' /></Link>
                                    <Link><LazyLoadImage src={instagram} effect="blur"
                                          loading='lazy' alt="" className='w-5' /></Link>
                                    <Link><LazyLoadImage src={twitter} effect="blur"
                                          loading='lazy' alt="" className='w-5' /></Link>
                              </div>
                        </div>
                  </div>

                  <div className="footer footer-center p-4 bg-black text-white">
                        <div>
                              <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;