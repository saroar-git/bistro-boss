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
                  </div>
            </>
      );
};

export default MenuCategory;