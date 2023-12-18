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
import LogFun from './pages/functions/logfun';
import PostPage from './pages/postingpage/postPage';
import PostForm from './pages/postingpage/postingPage';
import Footer from './pages/footer/Footer';
import ProfilePage from './pages/profilePage/profilePage';
import ProfileForm from './pages/profilePage/ProfileForm';
import PopupMessage from './pages/status/mainComponents';
import PostHostel from './pages/postingpage/posthostel';
import ViewHostel from './pages/viewHostel/ViewHostel';
import ConfirmBooking from './pages/confirmBooking/ConfirmBooking';
import RoomUploadForm from './pages/roomupload/roomUpload';
import LogDB from './pages/functions/lofundb';
import Landlord from './pages/landlord/landlord';

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar2 />
        <Home />
        <BoxInWords />
        {/* <div style ={{display: "Flex"}}>
          <Leftbar/> 
          <Outlet/>
          <Rightbar/> 
          </div> */}
        <Footer />
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
      ],
    },

    {
      path: '/BookingPage',
      element: <BookingPage />,
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signin',
      element: <LogDB />,
    },
    {
      path: '/roomUpload',
      element: <RoomUploadForm />,
    },
    {
      path: '/landlord/dashboard',
      element: <Landlord />,
    },

    {
      path: '/viewHostel',
      element: <ViewHostel />,
    },
    {
      path: '/confirmBooking',
      element: <ConfirmBooking />,
    },
    {
      path: '/post',
      element: <PostForm />,
    },

    {
      path: '/profile/:id',
      element: <ProfilePage />,
    },

    {
      path: '/Register',
      element: <Register />,
    },

    {
      path: '/profile/:id/editprofile',
      element: <ProfileForm />,
    },

    {
      path: '/profile/:id/status',
      element: <PopupMessage />,
    },

    {
      path: '/PostPage',
      element: <PostPage />,
    },
    {
      path: '/post/hostel',
      element: <PostHostel />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
