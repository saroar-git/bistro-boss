import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";

const ManageItems = () => {
      const [menu, refetch] = useMenu();
      const [axiosSecure] = useAxiosSecure();

      const handleDelete = item => {
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

                        axiosSecure.delete(`/menu/${item._id}`)
                              .then(res => {
                                    console.log('deleted res', res.data);
                                    if (res.data.deletedCount > 0) {
                                          refetch();
                                          Swal.fire(
                                                'Deleted!',
                                                'Your item has been deleted.',
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
                  <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'} />

                  <div className="py-10 bg-base-200 rounded mt-20">

                        <div className="md:text-2xl uppercase pl-16 font-semibold">
                              <h3>Total items: {menu.length}</h3>
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
                                                <th className="text-[17px] bg-[#D1A054]">UPDATE</th>
                                                <th className="text-[17px] bg-[#D1A054]">DELETE</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          {menu
                                                .sort((a, b) => a.time - b.time)
                                                .map((item, index) =>
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
                                                                  <button className="pl-4 pr-3 py-3 rounded text-xl text-white bg-[#D2A359]"><FaEdit /> </button>
                                                            </th>
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

export default ManageItems;