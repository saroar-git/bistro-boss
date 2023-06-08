import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";

const FoodCard = ({ item }) => {
      const { user } = useAuth();
      const { image, name, recipe, price, _id } = item;
      const [, refetch] = useCart();

      const navigate = useNavigate();
      const location = useLocation();

      const handleAddToCart = () => {

            if (user && user.email) {
                  const cartItem = { itemId: _id, name, price, recipe, image, email: user.email, };

                  fetch('https://bistro-boss-server-six-chi.vercel.app/carts', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(cartItem)
                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.insertedId) {
                                    refetch();
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                          title: 'Item added on the cart',
                                          showConfirmButton: false,
                                          timer: 1000
                                    });
                              }
                        });
            }
            else {
                  Swal.fire({
                        title: 'Please login to add to cart',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Login'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              navigate('/login', { state: { from: location } });
                        }
                  });
            }
      };

      return (
            <div className="card md:w-96 bg-base-100 shadow-xl">
                  <figure>
                        <LazyLoadImage
                              effect="blur"
                              loading='lazy'
                              src={image} alt="Picture"
                        />
                  </figure>
                  <p className="absolute right-0 bg-slate-800 mr-4 mt-4 px-3 py-1 rounded-xl text-white">$ {price}</p>

                  <div className="card-body justify-center text-center space-y-3">
                        <h2 className="card-title justify-center">{name}</h2>
                        <p className="text-[#737373]">{recipe}</p>
                        <div className="card-actions justify-center">
                              <button onClick={() => handleAddToCart(item)} className="px-3 uppercase rounded-lg py-2 text-[#BB8506] border-b-2 bg-[#E8E8E8] border-[#BB8506]  hover:bg-[#111827] hover:duration-500">Add to Cart</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;