/** @format */

const PaymentSummary = () => {
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

      <div className='border rounded-md p-4 mb-4'>
        <div className='flex items-center gap-2 mb-4'>
          <input type='radio' checked readOnly />
          <span className='text-sm font-medium'>Cards</span>
        </div>

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

        <label className='flex items-center gap-2 text-sm text-gray-600'>
          <input type='checkbox' />
          Securely save this card for later purchase
        </label>
      </div>

      <div className='space-y-3 text-sm'>
        <label className='flex items-center gap-2'>
          <input type='radio' /> UPI
        </label>
        <label className='flex items-center gap-2'>
          <input type='radio' /> Net Banking
        </label>
        <label className='flex items-center gap-2'>
          <input type='radio' /> Mobile Wallets
        </label>
      </div>
    </div>
  );
};
export default PaymentSummary;
