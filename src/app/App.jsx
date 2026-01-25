/** @format */

import { RouterProvider } from 'react-router-dom';
import Home from '../features/home/pages/Home';
import MainLayout from '../shared/layouts/MainLayout';
import router from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
