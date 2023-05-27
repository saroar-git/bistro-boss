import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import cover from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
      const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'dessert');
      const salad = menu.filter(item => item.category === 'salad');
      const soup = menu.filter(item => item.category === 'soup');
      const pizza = menu.filter(item => item.category === 'pizza');
      const offered = menu.filter(item => item.category === 'offered');

      return (
            <>
                  <Helmet>
                        <title>Bistro-Boss | Menu</title>
                  </Helmet>

                  {/* main cover  */}
                  <Cover
                        img={cover}
                        title={'Our Menu'}
                        subTitle={'Would you like to try a dish?'}
                  />

                  {/* offered menu items  */}
                  <div className='md:w-[1240px] w-11/12 mx-auto my-24'>
                        <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />

                        <MenuCategory items={offered} />
                  </div>

                  {/* dessert menu items  */}
                  <>
                        <MenuCategory items={dessert} cover={dessertImg} title={'dessert'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                  </>

                  {/* pizza menu items  */}
                  <>
                        <MenuCategory items={pizza} cover={pizzaImg} title={'pizza'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                  </>

                  {/* salad menu items  */}
                  <>
                        <MenuCategory items={salad} cover={saladImg} title={'salad'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                  </>

                  {/* soup menu items  */}
                  <>
                        <MenuCategory items={soup} cover={soupImg} title={'soup'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
                  </>
            </>
      );
};

export default Menu;