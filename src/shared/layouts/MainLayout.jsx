/** @format */

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
