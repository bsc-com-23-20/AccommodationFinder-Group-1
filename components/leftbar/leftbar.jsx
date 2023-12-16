import "./leftbar.scss"
import profileicon  from "../../images/user.png";
import  male  from "../../images/male.jpeg";
import female from "../../images/female.png"
import mat from "../../images/schooli.svg"
import rul from "../../images/urbani.png"
import urb from "../../images/urbanir.png";
import single from "../../images/single.png";
import double from "../../images/double.png"
import triple from "../../images/triple.png"

const Leftbar = () => {
    return (
        <div className = "leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={profileicon} alt="profile pic" />
                        <span>Kondwa K-sli</span>
                    </div>
                    <hr/>
                    <div className="item">
                        <img src={male} alt="male" />
                        <span>Boys hostels</span>
                    </div>
                    <div className="item">
                        <img src={female} alt="gender" />
                        <span>Girls hostels</span>
                    </div>
                    <hr/>
                    <div className="loca">
                        <span>Location</span>
                    </div>
                    <div className="item">
                        <img src={mat} alt="matiya" />
                        <span>Chikanda Matiya</span>
                    </div>
                    <div className="item">
                        <img src={rul} alt="rural" />
                        <span>Chikanda Rural</span>
                    </div>                    
                    <div className="item">
                        <img src={urb} alt="urban" />
                        <span>Chikanda Urban</span>
                    </div>
                    <hr/>
                    <div className="item">
                    <img src={single} alt="single" />
                        <span>Single</span>
                    </div>
                    <div className="item">
                    <img src={double} alt="double" />
                        <span>Double</span>
                    </div>
                    <div className="item">
                    <img src={triple} alt="triple" />
                        <span>Triple</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar