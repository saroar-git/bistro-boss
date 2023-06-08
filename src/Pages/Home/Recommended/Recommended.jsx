import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";


const Recommended = () => {
      const [menu, setMenu] = useState([]);
      useEffect(() => {
            fetch('https://bistro-boss-server-six-chi.vercel.app/menu')
                  .then(res => res.json())
                  .then(data => {
                        const popularItems = data.filter(item => item.category === 'salad');
                        setMenu(popularItems.slice(4, 7));
                  });
      }, []);

      return (
            <div className='md:mb-24 my-12'>
                  <SectionTitle
                        subHeading={'---Should Try---'}
                        heading={'CHEF RECOMMENDS'} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {
                              menu.map(item =>

                                    <div key={item._id}>
                                          <div className="card md:w-96 bg-base-100 shadow-xl">
                                                <figure><img src={item?.image} alt="Shoes" /></figure>
                                                <div className="card-body justify-center text-center space-y-3">
                                                      <h2 className="card-title justify-center">{item?.name}</h2>
                                                      <p>{item?.recipe}</p>
                                                      <div className="card-actions justify-center">
                                                            <button className="px-3 uppercase rounded-lg py-2 text-[#BB8506] border-b-2 bg-[#E8E8E8] border-[#BB8506]  hover:bg-[#111827] hover:duration-500">Add to Cart</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              )
                        }
                  </div>

            </div>
      );
};

export default Recommended;