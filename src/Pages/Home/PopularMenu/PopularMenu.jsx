import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";


const PopularMenu = () => {
      const [menu, setMenu] = useState([]);
      useEffect(() => {
            fetch('menu.json')
                  .then(res => res.json())
                  .then(data => {
                        const popularItems = data.filter(item => item.category === 'popular');
                        setMenu(popularItems);
                  });
      }, []);

      return (
            <div className='md:mb-24 my-12'>
                  <SectionTitle
                        subHeading={'---Check it out---'}
                        heading={'FROM OUR MENU'} />
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                        {
                              menu.map(item => <MenuItem key={item._id} item={item} />)
                        }
                  </div>

            </div>
      );
};

export default PopularMenu;