import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
      const [menu] = useMenu();
      const popular = menu.filter(item => item.category === 'popular');

      return (
            <div className='md:mb-24 my-12'>
                  <SectionTitle
                        subHeading={'---Check it out---'}
                        heading={'FROM OUR MENU'}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                        {
                              popular.map(item => <MenuItem key={item._id} item={item} />)
                        }
                  </div>

            </div>
      );
};

export default PopularMenu;