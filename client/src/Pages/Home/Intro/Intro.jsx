import banner from '../../../assets/home/chef-service.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Intro = () => {
      return (
            <div className='mb-24 relative'>
                  <LazyLoadImage src={banner} effect="blur"
                        loading='lazy' alt="" />
                  <div className='absolute top-4 md:top-20 mx-6 md:mx-40 md:px-28 px-2 py-3 md:py-16 text-center bg-white'>
                        <h3 className='md:text-3xl text-sm mb-1 md:mb-4'>Bistro Boss</h3>
                        <p className='text-[7px] md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                  </div>
            </div>
      );
};

export default Intro;