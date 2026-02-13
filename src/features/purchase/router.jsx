/** @format */

import ProtectedRoute from '../../routes/ProtectedRoute';
import Checkout from './pages/Checkout';

const purchaseRoutes = {
  path: 'checkout',
  element: (
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  ),
  children: [{ path: ':slug', element: <Checkout /> }],
};

export default purchaseRoutes;
