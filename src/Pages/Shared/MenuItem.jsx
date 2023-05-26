import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const MenuItem = ({ item }) => {
      const { image, price, recipe, name } = item;

      return (
            <div className="flex space-x-4">
                  <LazyLoadImage
                        src={image}
                        effect="blur"
                        loading='lazy'
                        className="md:w-[100px] w-12 h-12 md:h-full"
                        style={{ borderRadius: '0 200px 200px 200px' }} />
                  <div>
                        <h2>{name}----------------</h2>
                        <p>{recipe}</p>
                  </div>
                  <p className="text-[#BB8506]">{price}</p>
            </div>
      );
};

export default MenuItem;