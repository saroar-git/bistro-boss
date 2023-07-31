import FoodCard from "../../../Components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
      const pagination = {
            clickable: true,
            renderBullet: function (index, className) {
                  return '<span class="' + className + ' text-xl rounded-full p-8 text-white">' + (index + 1) + "</span>";
            },
      };

      const item = [];
      for (let i = 0; i < items.length; i += 6) {
            item.push(items.slice(i, i + 6));
      }

      return (
            <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper"
            >
                  {item.map((chunk, index) => (
                        <SwiperSlide key={index}>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                                    {chunk.map((item) => (
                                          <FoodCard key={item._id} item={item} />
                                    ))}
                              </div>
                        </SwiperSlide>
                  ))}
            </Swiper>
      );
};

export default OrderTab;
