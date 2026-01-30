/** @format */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) return <Navigate to='/login' />;
  if (user) return <Navigate to='/' />;

  return <>{children}</>;
};
export default ProtectedRoute;
