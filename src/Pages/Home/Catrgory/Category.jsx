import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
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
                        spaceBetween={30}
                        slidesPerView={4}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className='mySwiper md:mt-12 mt-8 md:mb-24'
                  >
                        <SwiperSlide>
                              <img src={slide1} alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Salad</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide2} alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Pizza</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide3} alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Soup</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide4} alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Dessert</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide5} alt="" />
                              <h3 className='text-white uppercase right-4 md:right-1/2 absolute bottom-2 md:bottom-8 md:text-2xl text-[12px] font-semibold'>Salad</h3>
                        </SwiperSlide>
                  </Swiper>
            </section>
      );
};

export default Category;