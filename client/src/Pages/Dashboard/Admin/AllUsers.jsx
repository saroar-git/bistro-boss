import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";
import SectionTitle from "../../../Components/SectionTitle";

const AllUsers = () => {
      const [axiosSecure] = useAxiosSecure();
      
      const { data: users = [], refetch } = useQuery(['users'], async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
      });

      const handleMakeAdmin = user => {
            fetch(`https://bistro-boss-server-six-chi.vercel.app/users/admin/${user._id}`, {
                  method: "PATCH"
            })
                  .then(res => res.json())
                  .then(data => {

                        if (data.modifiedCount) {
                              refetch();
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `${user.name} is an Admin Now!`,
                                    showConfirmButton: false,
                                    timer: 1000
                              });
                        }
                  });
      };

      const handleDelete = user => {
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
                        fetch(`https://bistro-boss-server-six-chi.vercel.app/users/${user._id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                                    if (data.deletedCount > 0) {
                                          refetch();
                                          Swal.fire(
                                                `${user.name} has been Removed`,
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
                        <title>Bistro-Boss | All Users</title>
                  </Helmet>

                  <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'} />


                  <div className="p-10 bg-base-200 rounded mt-20">

                        <div className="md:text-2xl uppercase  font-semibold">
                              <h3>Total users: {users.length}</h3>
                        </div>

                        <div className="overflow-x-auto mt-8">
                              <table className="table table-zebra w-full mx-auto">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th className="text-[20px] bg-[#D1A054]">#</th>
                                                <th className="text-[17px] bg-[#D1A054]">NAME</th>
                                                <th className="text-[17px] bg-[#D1A054]">EMAIL</th>
                                                <th className="text-[17px] bg-[#D1A054]">ROLE</th>
                                                <th className="text-[17px] bg-[#D1A054]">ACTION</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          {users.map((user, index) =>
                                                <tr key={user?._id}>
                                                      <th>
                                                            {index + 1}
                                                      </th>
                                                      <td>
                                                            {user?.name}
                                                      </td>
                                                      <td>
                                                            {user?.email}
                                                      </td>
                                                      <td>
                                                            {user.role === "admin" ? "ADMIN" :
                                                                  <button
                                                                        onClick={() => handleMakeAdmin(user)} className="px-4 py-3 w-12 rounded text-white bg-[#D1A054] text-xl">
                                                                        <FaUserShield />
                                                                  </button>
                                                            }
                                                      </td>
                                                      <th>
                                                            <button
                                                                  onClick={() => handleDelete(user)}
                                                                  className="p-4 rounded text-white bg-red-600">
                                                                  <FaTrashAlt />
                                                            </button>
                                                      </th>
                                                </tr>)}

                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default AllUsers;