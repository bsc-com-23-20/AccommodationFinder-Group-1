import "./login.scss"
import { Link } from "react-router-dom";
import  LogFun  from "../functions/logfun"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>WELCOME TO ACCOFINDER.</h1>
                    <span>Don't you have an account?</span>
                    <Link to = '/register'>
                    <button>Register</button>
                    </Link>
                    

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <LogFun/>
                        <span>forgot password?</span>
                        <Link to ='./'>
                        click here
                        </Link>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default Login