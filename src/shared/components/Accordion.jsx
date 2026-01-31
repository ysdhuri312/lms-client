/** @format */

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Accordion = ({ title, value, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border border-gray-400 overflow-hidden '>
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between items-center px-4 py-3 text-left lg:block hover:bg-gray-50 cursor-pointer'
      >
        <div className='flex items-center gap-4 text-sm text-gray-500'>
          <span className={`transition-transform ${open ? 'rotate-90' : ''}`}>
            <ChevronRight />
          </span>
          <span className='font-medium lg:text-md lg:leading-4 lg:mb-1.5'>
            {title}
          </span>
        </div>
        <div className='text-sm text-gray-500 lg:text-xs'>
          <span className='lg:pl-10'>{value}</span>
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
