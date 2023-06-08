import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
      const [cart, refetch] = useCart();
      const total = cart.reduce((sum, item) => item.price + sum, 0);

      const handleDelete = (item) => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://bistro-boss-server-six-chi.vercel.app/carts/${item._id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          refetch();
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          );
                                    }
                              });
                  }
            });
      };

      return (
            <div className="w-full min-h-full mt-12 px-12">
                  <Helmet>
                        <title>Bistro-Boss | My Cart</title>
                  </Helmet>

                  <SectionTitle subHeading={'---My Cart---'} heading={'WANNA ADD MORE?'} />

                  <div className="py-10 bg-base-200 rounded mt-20">

                        <div className="md:flex justify-around md:text-2xl uppercase space-y-1 md:space-y-0 font-semibold">
                              <h3>Total orders: {cart.length}</h3>
                              <h4>Total price: {total.toFixed(2)}</h4>
                              <Link to='/dashboard/payment'> <button className="uppercase rounded md:text-xl btn-sm text-white bg-[#D1A054]">pay</button></Link>
                        </div>

                        <div className="overflow-x-auto w-full mt-8">
                              <table className="table w-11/12 mx-auto">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th className="text-[20px] bg-[#D1A054]">#</th>
                                                <th className="text-[17px] bg-[#D1A054]">ITEM IMAGE</th>
                                                <th className="text-[17px] bg-[#D1A054]">ITEM NAME</th>
                                                <th className="text-[17px] bg-[#D1A054]">PRICE</th>
                                                <th className="text-[17px] bg-[#D1A054]">ACTION</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          {cart.map((item, index) =>
                                                <tr key={item._id}>
                                                      <th>
                                                            {index + 1}
                                                      </th>
                                                      <td>
                                                            <div className="avatar">
                                                                  <div className="mask w-12 h-12 ml-8">
                                                                        <img src={item.image} alt="Avatar" />
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      <td>
                                                            {item.name}
                                                      </td>
                                                      <td>$ {item.price}</td>
                                                      <th>
                                                            <button onClick={() => handleDelete(item)} className="p-4 rounded text-white bg-red-600"><FaTrashAlt /> </button>
                                                      </th>
                                                </tr>)}

                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default MyCart;