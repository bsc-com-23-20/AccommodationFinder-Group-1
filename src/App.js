import "./App.css"
import Login from './pages/login/login';
import Register from './pages/register/register';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar2 from "./components/navbar/navbar2";
import Rightbar from "./components/rightbar/rightbar";
import Leftbar from "./components/leftbar/leftbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
//import AuthContext from "./components/context/authContext";
<<<<<<< HEAD
import useContext from 'react';
import BoxInWords from './components/boxwords/boxinwords';
import BookingPage from './pages/bookingPage/bookingPage';
// import Counter from './components/counter/Counter';
import ViewHostel from './pages/viewHostel/ViewHostel';
import ConfirmBooking from './pages/confirmBooking/ConfirmBooking';
import Footer from './pages/footer/Footer';
=======
import useContext from "react";
import BoxInWords from "./components/boxwords/boxinwords";
import BookingPage from "./pages/bookingPage/bookingPage";
import LogFun from "./pages/functions/logfun";
import PostPage from "./pages/postingpage/postPage";
import PostForm from "./pages/postingpage/postingPage";
import Footer from "./pages/footer/Footer";
import ProfilePage from "./pages/profilePage/profilePage";
import ProfileForm from "./pages/profilePage/ProfileForm";
import PopupMessage from "./pages/status/mainComponents";

>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d

function App() {

  const currentUser = true;

<<<<<<< HEAD
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
=======
  const Layout = ()=>{

    return(
        <div>
          <Navbar2 />
          <Home/>
          <BoxInWords/>
          {/* <div style ={{display: "Flex"}}>
>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d
          <Leftbar/> 
          <Outlet/>
          <Rightbar/> 
          </div> */}
          <Footer/>
<<<<<<< HEAD
      </div>
    );
  };
=======
        </div>
    )
  }
>>>>>>> d0f980737aef3016fdcf6e464a469e72309e0a1d

  const ProtectedRoute = ({children}) => {
    
    if (!currentUser){
      return <Navigate to="/login"/>;
    }

    return children
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
        ),
      children: [
        {
        path: "/home",
        element: <Home/>,
      },

    ]
    },

    {
      path: "/BookingPage",
      element: <BookingPage/>,
    },

    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/profile/:id",
      element: <ProfilePage/>,
    },

    {
      path: "/Register",
      element: <Register/>,
    },

    {
      path: "/profile/:id/editprofile",
      element: <ProfileForm/>,
    },

    {
      path: "/profile/:id/status",
      element: <PopupMessage/>,
    },

    {
      path: "/PostPage",
      element: <PostPage/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
