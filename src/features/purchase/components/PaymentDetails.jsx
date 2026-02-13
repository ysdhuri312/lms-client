/** @format */

import { useState } from 'react';
import usePurchaseCourseDetails from '../hooks/usePurchaseCourseDetails';

const PaymentDetails = ({ slug }) => {
  const { purchaseCourse, error, loading } = usePurchaseCourseDetails(slug);

  const [selected, setSelected] = useState('card');

  if (error) return <p>Somthing went worng...</p>;
  if (loading) return <p>Courses loading...</p>;

  const { title, category, description, stats, modules } = purchaseCourse;

  return (
    <div className='bg-white rounded-lg border p-6'>
      <h2 className='text-xl font-semibold mb-6'>Checkout</h2>

      <h3 className='font-medium mb-3'>Billing address</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <select className='border rounded-md px-3 py-2 text-sm'>
          <option>India</option>
        </select>

        <select className='border rounded-md px-3 py-2 text-sm'>
          <option>Maharashtra</option>
        </select>
      </div>

      <p className='text-xs text-gray-500 mb-6'>
        We are required by law to collect applicable transaction taxes for
        purchases made in certain tax jurisdictions.
      </p>

      <div className='flex justify-between items-center mb-3'>
        <h3 className='font-medium'>Payment method</h3>
        <span className='text-xs text-gray-500'>🔒 Secure and encrypted</span>
      </div>

      <div>
        {/* Option-1  */}
        <div className='border rounded-md pt-4 pl-4 pr-4 mb-4'>
          <div className='flex items-center gap-2 mb-4'>
            <input
              type='radio'
              value='card'
              name='payment-mode'
              checked={selected === 'card'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='text-sm font-medium'>Cards</span>
          </div>

          {selected === 'card' && (
            <>
              <input
                type='text'
                placeholder='Card number'
                className='w-full border rounded-md px-3 py-2 text-sm mb-4'
              />
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='MM/YY'
                  className='border rounded-md px-3 py-2 text-sm'
                />
                <input
                  type='text'
                  placeholder='CVC'
                  className='border rounded-md px-3 py-2 text-sm'
                />
              </div>
              <input
                type='text'
                placeholder='Name on card'
                className='w-full border rounded-md px-3 py-2 text-sm mb-3'
              />
              <label className='flex items-center gap-2 text-sm text-gray-600 my-3'>
                <input type='checkbox' />
                Securely save this card for later purchase
              </label>
            </>
          )}
        </div>

        {/* Option-2  */}
        <div className='border rounded-md pt-4 pl-4 pr-4 mb-4'>
          <div className='flex items-center gap-2 mb-4'>
            <input
              type='radio'
              value='upi'
              name='payment-mode'
              checked={selected === 'upi'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='text-sm font-medium'>UPI</span>
          </div>
          {selected === 'upi' && (
            <input
              type='text'
              placeholder='UPI ID'
              className='w-full border rounded-md px-3 py-2 text-sm mb-4'
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default PaymentDetails;
