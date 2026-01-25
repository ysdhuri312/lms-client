/** @format */

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
