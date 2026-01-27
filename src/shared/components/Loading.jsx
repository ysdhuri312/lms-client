/** @format */

const Loading = ({ size = 120 }) => {
  return (
    <div className='flex  h-screen items-center justify-center'>
      <div
        className='
          rounded-full
          border-16 border-gray-200
          border-t-primary
          animate-spin
        '
        style={{
          width: size,
          height: size,
        }}
        aria-label='Loading'
        role='status'
      />
    </div>
  );
};
export default Loading;
