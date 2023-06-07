import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";
import { GiWallet } from "react-icons/gi";
import { FaUsers, FaUtensils } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminHome = () => {
      const [axiosSecure] = useAxiosSecure();

      const { data: stats = {} } = useQuery({
            queryKey: ['/admin-stats'],
            queryFn: async () => {
                  const res = await axiosSecure('/admin-stats');
                  return res.data;
            }
      });

      const { data: chartData = [] } = useQuery({
            queryKey: ['chart-data'],
            queryFn: async () => {
                  const res = await axiosSecure('/order-stats');
                  return res.data;
            }
      });

      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
      const getPath = (x, y, width, height) => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
      };

      const TriangleBar = (props) => {
            const { fill, x, y, width, height } = props;

            return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      return (
            <div className="w-full min-h-full mt-16 px-12">
                  <Helmet><title>Bistro-Boss | Admin Home</title></Helmet>

                  <h2 className="uppercase text-3xl">hi, welcome back!</h2>

                  <div className="my-16 flex items-center justify-evenly text-center">
                        <div className="stats shadow">

                              <div className="stat flex items-center text-white bg-gradient-to-tr from-[#BB34F5] to-[#FCDBFF] text-xl font-semibold">
                                    <GiWallet className="text-4xl" />
                                    <div>
                                          <h2 className="text-3xl">{ stats}</h2>
                                          <h3>Revenue</h3>
                                    </div>
                              </div>

                        </div>

                        <div className="stats shadow">

                              <div className="stat flex items-center text-white bg-gradient-to-tr from-[#D3A256] to-[#FDE8C0] text-xl font-semibold">
                                    <FaUsers className="text-4xl" />
                                    <div>
                                          <h2 className="text-3xl">1000</h2>
                                          <h3>Customers</h3>
                                    </div>
                              </div>

                        </div>

                        <div className="stats shadow">

                              <div className="stat flex items-center text-white bg-gradient-to-tr from-[#FE4880] to-[#FECDE9] text-xl font-semibold">
                                    <FaUtensils className="text-4xl" />
                                    <div>
                                          <h2 className="text-3xl">1000</h2>
                                          <h3>Products</h3>
                                    </div>
                              </div>

                        </div>

                        <div className="stats shadow">

                              <div className="stat flex items-center text-white bg-gradient-to-tr from-[#6AAEFF] to-[#B6F7FF] text-xl font-semibold">
                                    <TbTruckDelivery className="text-4xl" />
                                    <div>
                                          <h2 className="text-3xl">1000</h2>
                                          <h3>Orders</h3>
                                    </div>
                              </div>

                        </div>
                  </div>

                  <div>
                        <BarChart
                              width={500}
                              height={300}
                              data={chartData}
                              margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                              }}
                        >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="category" />
                              <YAxis />
                              <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {chartData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                              </Bar>
                        </BarChart>
                  </div>

            </div>
      );
};

export default AdminHome;