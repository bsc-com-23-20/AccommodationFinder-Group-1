import "./login.scss"
import { Link } from "react-router-dom"
import logo from "../../images/accofinder.png"
import LogDB from "../functions/lofundb";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <h1>WELCOME TO ACCOFINDER.</h1>
                    <span>Don't you have an account?
                    <Link to = '/register'>
                    <button>Register</button>
                    </Link>
                    </span>
                    

                </div>
                <div className="right">
                    <form>
                        <LogDB/>
                        <span>forgot password?
                        <Link to ='./'>
                        click here
                        </Link>
                        </span>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default Login