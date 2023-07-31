import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";


const MenuCategory = ({ items, cover, title, subTitle }) => {
      return (
            <>
                  {title && <Cover
                        img={cover}
                        title={title}
                        subTitle={subTitle}
                  />}

                  <div className='md:w-[1240px] w-11/12 mx-auto my-24'>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                              {
                                    items.map(item => <MenuItem key={item._id} item={item} />)
                              }
                        </div>
                        <div className="text-center mt-10">
                              <button className="px-3 uppercase rounded-lg py-2 text-black border-b-2 border-black hover:bg-slate-700 hover:text-white hover:duration-500">
                                    <Link to={`/order/${title}`}>ORDER YOUR FAVORITE FOOD</Link>
                              </button>
                        </div>
                  </div>
            </>
      );
};

export default MenuCategory;