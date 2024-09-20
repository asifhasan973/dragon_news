import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/main/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Career from './components/Career/Career.jsx';
import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import NewsDetails from './components/Home/NewsDetails.jsx';
import PrivavteRoute from './components/Home/PrivavteRoute.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/career',
        element: <Career></Career>,
      },
      {
        path: '/news/:id',
        element: (
          <PrivavteRoute>
            <NewsDetails></NewsDetails>
          </PrivavteRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },

  {
    path: '/register',
    element: <Register></Register>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
