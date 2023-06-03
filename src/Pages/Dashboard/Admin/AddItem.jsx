import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";


const AddItem = () => {
      return (
            <div className="w-full min-h-full mt-12 md:px-28">
                  <Helmet>
                        <title>Bistro-Boss | Add Items</title>
                  </Helmet>

                  <SectionTitle subHeading={"---What's new?---"} heading={'ADD AN ITEM'} />

                  <div className="p-10 bg-base-200 rounded mt-20">
                        <form className="space-y-6">
                              <div className="form-control w-full">
                                    <label className="label">
                                          <span className="label-text font-semibold">Recipe Name*</span>
                                    </label>
                                    <input type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                              </div>

                              <div className="md:flex justify-between">
                                    <div className="form-control w-full max-w-md">
                                          <label className="label">
                                                <span className="label-text font-semibold">Category*</span>
                                          </label>
                                          <select className="select select-bordered w-full">
                                                <option disabled selected>Pick one</option>
                                                <option>Pizza</option>
                                                <option>Soup</option>
                                                <option>Salad</option>
                                                <option>Dessert</option>
                                                <option>Drinks</option>
                                          </select>
                                    </div>

                                    <div className="form-control w-full max-w-md">
                                          <label className="label">
                                                <span className="label-text font-semibold">Recipe Name*</span>
                                          </label>
                                          <input type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                                    </div>
                              </div>

                              <div className="form-control w-full">
                                    <label className="label">
                                          <span className="label-text font-semibold">Recipe Details*</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-40 textarea-lg w-full" placeholder="Recipe Details"></textarea>
                              </div>
                        </form>

                  </div>

            </div>
      );
};

export default AddItem;