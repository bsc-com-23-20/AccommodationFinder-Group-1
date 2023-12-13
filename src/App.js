import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Navbar2 from './components/navbar/navbar2';
import Rightbar from './components/rightbar/rightbar';
import Leftbar from './components/leftbar/leftbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
//import AuthContext from "./components/context/authContext";
import useContext from 'react';
import BoxInWords from './components/boxwords/boxinwords';
import BookingPage from './pages/bookingPage/bookingPage';
// import Counter from './components/counter/Counter';
import ViewHostel from './pages/viewHostel/ViewHostel';
import ConfirmBooking from './pages/confirmBooking/ConfirmBooking';
import Footer from './pages/footer/Footer';

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar2 />
        <Home />
        <BoxInWords />
        {/* <Counter /> */}
        {/* <ConfirmBooking /> */}
        {/* <ViewHostel /> */}
        {/* <div style ={{display: "Flex"}}>
          <Leftbar/> 
          <Outlet/>
          <Rightbar/> 
          </div> */}
          <Footer/>
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
      path: '/BookingPage',
      // element: <BookingPage />,
      element: <ConfirmBooking />,
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/viewHostel',
      element: <ViewHostel/>,
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
