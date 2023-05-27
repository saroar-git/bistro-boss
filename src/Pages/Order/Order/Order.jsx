import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import cover from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
      const categories = ['salad', 'pizza', 'soup', 'dessert'];
      const { category } = useParams();
      const initialIndex = categories.indexOf(category);
      const [tabIndex, setTabIndex] = useState(initialIndex);

      const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'dessert');
      const salad = menu.filter(item => item.category === 'salad');
      const soup = menu.filter(item => item.category === 'soup');
      const pizza = menu.filter(item => item.category === 'pizza');
      const drinks = menu.filter(item => item.category === 'drinks');

      return (
            <div>
                  <Helmet>
                        <title>Bistro-Boss | Order Food</title>
                  </Helmet>

                  <Cover
                        img={cover}
                        title={'Make a Order'}
                        subTitle={'Closer to try our dishes!'}
                  />

                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='md:w-[1240px] w-11/12 mx-auto my-24'>
                        <TabList className={'uppercase text-center mb-8'}>
                              <Tab>Salad</Tab>
                              <Tab>Pizza</Tab>
                              <Tab>Soups</Tab>
                              <Tab>Dessert</Tab>
                              <Tab>Drinks</Tab>
                        </TabList>

                        <TabPanel>
                              <OrderTab items={salad} />
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={pizza} />
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={soup} />
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={dessert} />
                        </TabPanel>
                        <TabPanel>
                              <OrderTab items={drinks} />
                        </TabPanel>
                  </Tabs>
            </div>
      );
};

export default Order;