/** @format */

const NotFound = () => {
  return (
    <section
      style={{
        color: '#444',
        margin: 0,
        font: 'normal 14px/20px Arial, Helvetica, sans-serif',
        height: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ height: 'auto', minHeight: '100%' }}>
        <div
          style={{
            textAlign: 'center',
            width: '800px',
            marginLeft: '-400px',
            position: 'absolute',
            top: '30%',
            left: '50%',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '150px',
              lineHeight: '150px',
              fontWeight: 'bold',
            }}
          >
            404
          </h1>
          <h2 style={{ marginTop: '20px', fontSize: '30px' }}>Not Found</h2>
          <p style={{ marginTop: '10px' }}>
            The resource requested could not be found on this server!
          </p>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
