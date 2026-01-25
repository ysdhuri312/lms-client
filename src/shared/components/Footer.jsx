/** @format */

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-slate-900 to-slate-800 text-gray-300'>
      <div className='max-w-7xl mx-auto px-6 pt-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div>
            <div className='flex items-center gap-2 mb-4 text-xl font-semibold text-white'>
              Learn<span className='text-blue-600 text-2xl'>&</span>Earn
            </div>

            <p className='text-sm leading-relaxed text-gray-400 max-w-sm'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-3 text-sm'>
              <li>
                <a href='#' className='hover:text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  About us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Contact us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>
              Subscribe to our newsletter
            </h4>
            <p className='text-sm text-gray-400 mb-4'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 rounded-md bg-slate-700 border border-slate-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600'
              />
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-700 mt-12 py-4 text-center text-sm text-gray-400'>
          Copyright 2026 © Yogesh Dhuri. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
