import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_image_API;
const AddItem = () => {
      const [axiosSecure] = useAxiosSecure();
      const { register, handleSubmit, reset } = useForm();
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

      const onSubmit = data => {

            const formData = new FormData();
            formData.append('image', data.image[0]);

            fetch(img_hosting_url, {
                  method: 'POST',
                  body: formData
            })
                  .then(res => res.json())
                  .then(imgResponse => {
                        if (imgResponse.success) {
                              const imgURL = imgResponse.data.display_url;
                              const { name, price, category, recipe } = data;
                              const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };

                              axiosSecure.post('/menu', newItem)
                                    .then(data => {
                                          if (data.data.insertedId) {
                                                reset();
                                                Swal.fire({
                                                      position: 'top-end',
                                                      icon: 'success',
                                                      title: 'Item added successfully',
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                });
                                          }
                                    });
                        }
                  });
      };

      return (
            <div className="w-full min-h-full mt-12 md:px-28">
                  <Helmet>
                        <title>Bistro-Boss | Add Items</title>
                  </Helmet>

                  <SectionTitle subHeading={"---What's new?---"} heading={'ADD AN ITEM'} />

                  <div className="p-10 bg-base-200 rounded mt-20">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-control w-full">
                                    <label className="label">
                                          <span className="label-text font-semibold">Recipe Name*</span>
                                    </label>
                                    <input type="text" placeholder="Recipe name" className="input input-bordered w-full" {...register("name", { required: true })} />
                              </div>

                              <div className="md:flex justify-between">
                                    <div className="form-control w-full max-w-md">
                                          <label className="label">
                                                <span className="label-text font-semibold">Category*</span>
                                          </label>
                                          <select className="select select-bordered w-full" defaultValue={'Pick one'} {...register("category", { required: true })}>
                                                <option disabled >Pick one</option>
                                                <option>Pizza</option>
                                                <option>Soup</option>
                                                <option>Salad</option>
                                                <option>Dessert</option>
                                                <option>Drinks</option>
                                          </select>
                                    </div>

                                    <div className="form-control w-full max-w-md">
                                          <label className="label">
                                                <span className="label-text font-semibold">Price*</span>
                                          </label>
                                          <input type="number" placeholder="price" className="input input-bordered w-full" {...register("price", { required: true })} />
                                    </div>
                              </div>

                              <div className="form-control w-full">
                                    <label className="label">
                                          <span className="label-text font-semibold">Recipe Details*</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-40 textarea-lg w-full" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
                              </div>
                              <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                          <span className="label-text font-semibold">Item Image*</span>
                                    </label>
                                    <input type="file" className="file-input file-input-ghost border-gray-400" {...register("image", { required: true })} />
                              </div>
                              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                                    <input type="submit" value="Add Item" />
                                    <FaUtensils />
                              </button>
                        </form>

                  </div>

            </div>
      );
};

export default AddItem;