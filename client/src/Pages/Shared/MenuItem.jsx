import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const MenuItem = ({ item }) => {
      const { image, price, recipe, name } = item;

      return (
            <div className="flex space-x-4 items-center">
                  <LazyLoadImage
                        src={image}
                        effect="blur"
                        loading='lazy'
                        className="w-28 h-12 md:h-16"
                        style={{ borderRadius: '0 200px 200px 200px' }} />
                  <div>
                        <h2 className="font-semibold mb-2 text-lg">{name} ----------</h2>
                        <p>{recipe}</p>
                  </div>
                  <p className="text-[#BB8506]">{price}</p>
            </div>
      );
};

export default MenuItem;