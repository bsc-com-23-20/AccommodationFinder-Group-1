import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersornOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import profileicon  from "../../images/user.png";
import AFlogo  from "../../images/accofinder.png";

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="left">
            <img src={AFlogo} alt="logo" />
                <HomeOutlinedIcon/>
                {/* <GridViewOutlinedIcon/> */}
            
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="search..." />
            </div>
            </div>
            <div className="right">
                <PersornOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                   <img src={profileicon} alt="profile pic" />
                    <span>Kondwa K-sli</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;