/** @format */

import { Link } from 'react-router-dom';
import usePurchaseCourseDetails from '../hooks/usePurchaseCourseDetails';
import { useRazorpay } from '../hooks/useRazorpay';
import { useAuth } from '../../auth/context/AuthContext';

const OrderSummary = ({ slug }) => {
  const { purchaseCourse, error, loading } = usePurchaseCourseDetails(slug);

  const { startPayment } = useRazorpay();
  const { user } = useAuth();

  if (error) return <p>Somthing went worng...</p>;
  if (loading) return <p>Courses loading...</p>;

  const { _id, title, thumbnail, price } = purchaseCourse;

  const handleSubmit = (e) => {
    e.preventDefault();

    startPayment({
      amount: price * 100,
      currency: 'INR',
      receipt: `reciept_${Date.now()}`,
      notes: {
        userEmail: user.authId.email,
        courseId: _id,
        country: 'India',
      },
    });
  };

  return (
    <div className='bg-white rounded-lg border p-6 sticky top-6'>
      <h3 className='text-lg font-semibold mb-4'>Order summary</h3>

      {!Array.isArray({ purchaseCourse }) ? (
        <div className='my-6'>
          <h3 className='font-medium mb-2'>Order details (1 course)</h3>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-3'>
              <img src={thumbnail} className='rounded h-12 w-16' />
              <p className='text-sm'>{title}</p>
            </div>
            <div className='text-right text-sm'>
              <p className='font-medium'>₹{price}</p>
              <p className='line-through text-gray-400'>₹3,109</p>
            </div>
          </div>
        </div>
      ) : (
        'Under construction'
      )}

      <div className='space-y-2 text-sm mb-4'>
        <div className='flex justify-between'>
          <span>Original Price:</span>
          <span>₹3,109</span>
        </div>
        <div className='flex justify-between text-green-600'>
          <span>Discounts (83% Off):</span>
          <span>-₹2,590</span>
        </div>
      </div>

      <div className='flex justify-between font-semibold text-lg mb-4'>
        <span>Total (1 course):</span>
        <span>₹{price}</span>
      </div>

      <p className='text-xs text-gray-500 mb-4'>
        By completing your purchase, you agree to these{' '}
        <span className='text-purple-600 underline cursor-pointer'>
          Terms of Use
        </span>
        .
      </p>

      <Link
        to={`${slug}/payment`}
        onClick={handleSubmit}
        type='button'
        className='block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold mb-4 cursor-pointer'
      >
        🔒 Pay ₹{price}
      </Link>

      <div className='text-center text-sm text-gray-600 mb-6'>
        <p className='font-medium'>30-Day Money-Back Guarantee</p>
        <p>Not satisfied? Get a full refund within 30 days.</p>
      </div>

      <div className='border rounded-md p-4 text-sm text-gray-600'>
        🔥 <span className='font-medium'>Tap into Success Now</span>
        <p className='mt-1'>
          Join 100+ people in your country who’ve enrolled in this course in the
          last 24 hours.
        </p>
      </div>
    </div>
  );
};
export default OrderSummary;
