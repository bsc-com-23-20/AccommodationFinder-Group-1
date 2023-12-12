import "./rightbar.scss"
import user from "../../images/user.png"


const Rightbar = () => {
    return (
        <div className = "rightbar">
            <div className="container">
                <div className="item">
                    <span>Top known landlords</span>
                    <div className="user">
                        <div className="user-info">
                            <img src={user} alt="user" />
                            <span>Mr Chitsanzo Example 1</span>
                        </div>
                        <button>View</button>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={user} alt="user" />
                            <span>Mr Chitsanzo Example 2</span>
                        </div>
                        <button>View</button>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={user} alt="user" />
                            <span>Mr Chitsanzo Example 3</span>
                        </div>
                        <button>View</button>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={user} alt="user" />
                            <span>Mr Chitsanzo Example 4</span>
                        </div>
                        <button>View</button>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src={user} alt="user" />
                            <span>Mr Chitsanzo Example 5</span>
                        </div>
                        <button>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar