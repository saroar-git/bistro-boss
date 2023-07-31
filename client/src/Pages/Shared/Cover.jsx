import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {

      return (
            <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={img}
                  bgImageAlt="the menu"
                  strength={-200}
            >
                  <div className="hero min-h-[600px]">
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-center text-neutral-content">
                              <div className='absolute top-72 md:top-48 md:px-60 px-12 py-8 md:py-16 mx-4 md:mx-60 text-center bg-[#15151599] text-white uppercase' data-aos="zoom-in-up" data-aos-easing="linear"
                                    data-aos-duration="1000">
                                    <h3 className='md:text-5xl text-2xl mb-1 md:mb-6 font-extrabold'>{title}</h3>
                                    <p className='text-sm md:text-base'>{subTitle}</p>
                              </div>
                        </div>
                  </div>
            </Parallax>
      );
};

export default Cover;