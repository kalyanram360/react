import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx'; // make sure About.jsx exists
import Layout from './Layout.jsx'; // Layout component that uses <Outlet />
import User from './components/user/User.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path : 'user/:userId',
        element : <User/>
      }
    ]
  }
]);


// const roouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />


      
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
