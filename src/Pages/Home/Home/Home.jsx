import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Category from "../Catrgory/Category";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommended from "../Recommended/Recommended";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Bistro-Boss Restaurant</title>
                  </Helmet>

                  <Banner />
                  <div className='md:w-[1240px] w-11/12 mx-auto'>
                        <Category />
                        <Intro />
                        <PopularMenu />
                        <Call />
                        <Recommended />
                  </div>
                  <Featured />
                  <Testimonials />
            </div>
      );
};

export default Home;