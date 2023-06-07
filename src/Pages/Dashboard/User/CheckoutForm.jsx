import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";

const CheckoutForm = ({ cart, price }) => {
      const stripe = useStripe();
      const elements = useElements();
      const { user } = useAuth();
      const [axiosSecure] = useAxiosSecure();
      const [cardError, setCardError] = useState('');
      const [clientSecret, setClientSecret] = useState('');
      const [processing, setProcessing] = useState(false);
      const [transactionId, setTransactionId] = useState('');

      useEffect(() => {
            if (price > 0) {
                  axiosSecure.post('/create-payment-intent', { price })
                        .then(res => {
                              setClientSecret(res.data.clientSecret);
                        });
            }
      }, [price, axiosSecure]);

      const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                  return;
            }

            const card = elements.getElement(CardElement);
            if (card === null) {
                  return;
            }

            const { error } = await stripe.createPaymentMethod({
                  type: 'card',
                  card
            });

            if (error) {
                  setCardError(error.message);
            } else {
                  setCardError('');
            }

            setProcessing(true);

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    name: user?.displayName || 'anonymous',
                                    email: user?.email || 'unknown'
                              },
                        },
                  },
            );

            if (confirmError) {
                  console.log(confirmError);
            }

            console.log('payment intent', paymentIntent);
            setProcessing(false);
            if (paymentIntent?.status === 'succeeded') {
                  setTransactionId(paymentIntent.id);

                  const payment = {
                        email: user?.email,
                        transactionId: paymentIntent.id,
                        price,
                        date: new Date(),
                        quantity: cart.length,
                        cartItems: cart.map(item => item._id),
                        menuItems: cart.map(item => item.menuItemId),
                        status: 'service pending',
                        itemNames: cart.map(item => item.name)
                  };
                  axiosSecure.post('/payments', payment)
                        .then(res => {
                              console.log(res.data);
                              if (res.data.result.insertedId) {
                                    // display confirmation message
                              }
                        })
                        .catch(error => {
                              setCardError(error);
                        });
            }
      };

      return (
            <>
                  <form className="w-3/5 mx-auto text-center" onSubmit={handleSubmit}>
                        <CardElement
                              className="border-2 border-primary p-3 rounded-lg"
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        <button className="bg-primary btn-wide px-3 py-2 text-white font-bold uppercase rounded-lg mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                              {processing ? 'Processing...' : 'Pay'}
                        </button>
                  </form>
                  {cardError && <p className="text-red-600 text-center">{cardError}</p>}
                  {transactionId && <p className="text-green-500 text-center">Transaction completed with transactionId: {transactionId}</p>}
            </>
      );
};

export default CheckoutForm;
