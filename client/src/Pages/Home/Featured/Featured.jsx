import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
      return (
            <div className='md:mb-24 my-12 featured-item bg-fixed pt-8 text-white'>
                  <SectionTitle
                        subHeading={'---Check it out---'}
                        heading={'FROM OUR MENU'}
                  />

                  <div className="md:flex justify-center items-center pb-20 md:px-16 md:w-[1240px] w-11/12 mx-auto gap-12">
                        <img src={featuredImg} alt="" className="w-[500px] mb-4 md:mb-0" />

                        <div className="md:w-[600px] space-y-2">
                              <p>March 20, 2023</p>
                              <p className="uppercase text-[20px]">WHERE CAN I GET SOME?</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                              <button className="px-3 uppercase rounded-lg py-2 text-white border-b-2 border-white hover:bg-slate-700 hover:duration-500">Read More</button>
                        </div>
                  </div>

            </div>
      );
};

export default Featured;