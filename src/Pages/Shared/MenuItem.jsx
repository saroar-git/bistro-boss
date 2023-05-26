

const MenuItem = ({ item }) => {
      const { image, price, recipe, name } = item;

      return (
            <div className="flex space-x-4">
                  <img src={image} alt="" className="md:w-[100px] w-12 h-12 md:h-full bg-black" style={{borderRadius: '0 200px 200px 200px'}} />
                  <div>
                        <h2>{name}----------------</h2>
                        <p>{recipe}</p>
                  </div>
                  <p>{price}</p>
            </div>
      );
};

export default MenuItem;