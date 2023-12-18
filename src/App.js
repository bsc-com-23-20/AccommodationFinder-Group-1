import Login from './pages/login/login';
import Register from './pages/register/register';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";
import Leftbar from "./components/leftbar/leftbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
//import AuthContext from "./components/context/authContext";
import useContext from "react";
import BookingForm from './pages/bookOnePage/bookOnePage'

function App() {

  const {currentUser} = false;

  const Layout = ()=>{

    return(
        <div>
          <Navbar />
          <div style ={{display: "Flex"}}>
          <Leftbar/> 
          <Outlet/>
          <Rightbar/> 
          </div>
        </div>
    )
  }

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

      {
        path: "/profile/:id",
        element: <Profile/>,
      }
    ]
    },

    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    },

    {
      path: "/Book",
      element: <BookingForm />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
