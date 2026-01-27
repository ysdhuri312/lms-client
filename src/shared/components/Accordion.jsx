/** @format */

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Accordion = ({ title, value, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border rounded-md overflow-hidden'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between items-center px-4 py-4 text-left hover:bg-gray-50 cursor-pointer'
      >
        <div className='flex items-center gap-4 text-sm text-gray-500'>
          <span className={`transition-transform ${open ? 'rotate-90' : ''}`}>
            <ChevronRight />
          </span>
          <span className='font-medium'>{title}</span>
        </div>
        <div className='flex items-center gap-4 text-sm text-gray-500'>
          <span>{value}</span>
        </div>
      </button>

      {open && (
        <div className='px-5 pb-4 text-sm text-gray-600 space-y-2'>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
