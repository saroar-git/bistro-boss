import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
      return (
            <section className='md:mt-20 my-12'>
                  <SectionTitle
                        subHeading={'---From 11:00am to 10:00pm---'}
                        heading={'Order Online'}
                  />
                  <Swiper
                        slidesPerView={4}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className='mySwiper md:mt-12 mt-8 md:mb-24'
                  >
                        <SwiperSlide>
                              <LazyLoadImage src={slide1} effect="blur"
                        loading='lazy' alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Salad</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <LazyLoadImage src={slide2} effect="blur"
                        loading='lazy' alt=""  />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Pizza</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <LazyLoadImage src={slide3} effect="blur"
                        loading='lazy' alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Soup</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <LazyLoadImage src={slide4} effect="blur"
                        loading='lazy' alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Dessert</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <LazyLoadImage src={slide5} effect="blur"
                        loading='lazy' alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Salad</h3>
                        </SwiperSlide>
                  </Swiper>
            </section>
      );
};

export default Category;