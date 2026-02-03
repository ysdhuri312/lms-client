/** @format */

import ProtectedRoute from '../../routes/ProtectedRoute';
import MainLayout from '../../shared/layouts/MainLayout';
import Checkout from './pages/Checkout';

const purchaseRoutes = {
  path: 'checkout',
  element: (
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  ),
  children: [{ path: ':courseId', element: <Checkout /> }],
};

export default purchaseRoutes;
