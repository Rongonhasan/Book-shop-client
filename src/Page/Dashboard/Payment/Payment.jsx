import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <h1 className="text-2xl mb-3">Payment Page</h1>
          <div>
          <Elements stripe={stripePromise}>
                <CheckoutForm/>
                 </Elements> 
          </div>
        </div>
    );
};

export default Payment;