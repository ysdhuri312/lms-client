/** @format */

import OrderSummary from '../components/OrderSummary';
import PaymentSummary from '../components/PaymentSummary';

const Checkout = () => {
  return (
    <div className='bg-gray-50 min-h-screen pt-20'>
      <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2'>
          <OrderSummary />
        </div>

        <div className='lg:col-span-1'>
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
};
export default Checkout;
