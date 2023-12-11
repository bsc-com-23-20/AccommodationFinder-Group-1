import "./register.scss";
import { Link } from "react-router-dom";
import RegDB from "../functions/regfun";
import logo from "../../images/accofinder.png"


const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <h1>ACCOFINDER.</h1>
                    <span>Do you have an account?</span>
                    <Link to = '/login'>
                    <button>Login</button>
                    </Link>

                </div>
                <div className="right">
                        <RegDB/>
                </div>
            </div>
            </div>
    )
}


export default Register