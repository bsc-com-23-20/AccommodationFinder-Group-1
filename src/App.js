import Login from './pages/login/login';
import Register from './pages/register/register';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Rightbar from './components/rightbar/rightbar';
import Leftbar from './components/leftbar/leftbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
//import AuthContext from "./components/context/authContext";
import useContext from 'react';
import Counter from './components/counter/Counter';
import ViewHostel from './pages/viewHostel/ViewHostel';
import ConfirmBooking from './pages/confirmBooking/ConfirmBooking';

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        {/* <Counter /> */}
        {/* <ViewHostel /> */}
        <ConfirmBooking />
        {/* <div style ={{display: "Flex"}}>
          <Leftbar/> 
          <Outlet/>
          <Rightbar/> 
          </div> */}
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/home',
          element: <Home />,
        },

        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },

    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
