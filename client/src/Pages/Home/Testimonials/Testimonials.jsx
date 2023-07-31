import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";


const Testimonials = () => {
      const [review, setReview] = useState([]);
      useEffect(() => {
            fetch('https://bistro-boss-server-six-chi.vercel.app/reviews')
                  .then(res => res.json())
                  .then(data => { setReview(data); });
      }, []);

      return (
            <div className='md:w-[1240px] w-11/12 mx-auto'>
                  <SectionTitle
                        subHeading={'---What Our Clients Say---'}
                        heading={'TESTIMONIALS'}
                  />

                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:mb-24">

                        {
                              review.map(review => <SwiperSlide
                                    key={review._id}>
                                    <div className="text-center">
                                          <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                                className="w-full mx-auto"
                                          />

                                          <FaQuoteLeft className="w-full text-black my-8 h-[50px] md:h-[100px]" />

                                          <div className="md:w-3/5 w-8/12 mx-auto text-xs md:text-base">
                                                <p>{review.details}</p>
                                                <h3 className="md:text-2xl text-lg my-8 font-semibold text-[#CD9003]">{review.name}</h3>
                                          </div>
                                    </div>
                              </SwiperSlide>)
                        }

                  </Swiper>

            </div>
      );
};

export default Testimonials;