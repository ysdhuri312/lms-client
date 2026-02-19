/** @format */

import { useAuth } from '../../auth/context/AuthContext';
import { createOrder, verifyPayment } from '../api/purchase.api';
import { useNavigate } from 'react-router-dom';

export const useRazorpay = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { authId, fullname } = user;

  const startPayment = async (orderDetails) => {
    try {
      const response = await createOrder(orderDetails);

      const { success, key, data: order } = response;

      if (success) {
        // Open Razorpay Checkout
        const options = {
          key: key, // Replace with your Razorpay key_id
          amount: order.amount, // Amount is in currency subunits.
          currency: 'INR',
          name: 'Acme Corp',
          description: 'Test Transaction',
          order_id: order.id, // This is the order_id created in the backend
          prefill: {
            name: fullname,
            email: authId.email,
            contact: '9999999999',
          },
          theme: {
            color: '#155dfc',
          },
          handler: async function (response) {
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            navigate('/my-courses');
          },
        };

        const rzp = new Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      console.log(error);
      alert('Internal server error');
    }
  };
  return { startPayment };
};
