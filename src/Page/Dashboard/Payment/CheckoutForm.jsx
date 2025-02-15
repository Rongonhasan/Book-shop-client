import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = () => {
     const [error, setError] = useState('');
    const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState('');
  const {user} = useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
const totalPrice = cart.reduce((total, item) => total + item.price, 0)

useEffect(() => {
    if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }

}, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
        setError(error.message)
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }
    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card: card,
          billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
          }
      }
  })
  if (confirmError) {
    console.log('confirm error')
}
else{
  console.log('payment intent', paymentIntent);
  if (paymentIntent.status === 'succeeded'){
    console.log('transaction id', paymentIntent.id);
    setTransactionId(paymentIntent.id);
     // now save the payment in the database
     const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: paymentIntent.id,
      date: new Date(), // utc date convert. use moment js to 
      cartIds: cart.map(item => item._id),
      bookItemIds: cart.map(item => item.bookId),
      status: 'pending'
  }
  const res = await axiosSecure.post('/payments', payment);
  console.log('payment saved', res.data);
  refetch();
  if (res.data?.paymentResult?.insertedId) {
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for the taka paisa",
          showConfirmButton: false,
          timer: 1500
      });
      navigate('/dashboard/paymentHistory')
  }

  }
}
  };
  

    return (
        <form onSubmit={handleSubmit}>
      <CardElement
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
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm;