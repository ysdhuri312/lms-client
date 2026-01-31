/** @format */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to='/login' />;
  return <>{children}</>;
};
export default ProtectedRoute;
