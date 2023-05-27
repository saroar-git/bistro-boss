import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const FoodCard = ({ item }) => {
      return (
            <div className="card md:w-96 bg-base-100 shadow-xl">
                  <figure>
                        <LazyLoadImage
                              effect="blur"
                              loading='lazy'
                              src={item.image} alt="Picture"
                        />
                  </figure>
                  <p className="absolute right-0 bg-slate-800 mr-4 mt-4 px-3 py-1 rounded-xl text-white">$ {item.price}</p>

                  <div className="card-body justify-center text-center space-y-3">
                        <h2 className="card-title justify-center">{item.name}</h2>
                        <p className="text-[#737373]">{item.recipe}</p>
                        <div className="card-actions justify-center">
                              <button className="px-3 uppercase rounded-lg py-2 text-[#BB8506] border-b-2 bg-[#E8E8E8] border-[#BB8506]  hover:bg-slate-500 hover:text-white hover:duration-500">Add to Cart</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;