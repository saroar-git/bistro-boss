import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
      const [cart] = useCart();
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      const price = parseFloat(total.toFixed(2));

      return (
            <div className="w-full min-h-full">
                  <Helmet>
                        <title>Bistro-Boss | Payment</title>
                  </Helmet>
                  <SectionTitle heading={'Payment'} />

                  <div className="w-3/5 mx-auto mt-40">
                        <Elements stripe={stripePromise}>
                              <CheckoutForm price={price} cart={cart} />
                        </Elements>
                  </div>
            </div>
      );
};


export default Payment;