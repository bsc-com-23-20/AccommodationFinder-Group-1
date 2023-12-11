import './navbar2.scss';
import { Component } from 'react';
import { MenuItems } from "./menuitem";
import { Link } from 'react-router-dom';
import accologo from "../../images/accofinder.png";
import menu from "../../images/menu.svg";
import cross from "../../images/close.svg";


class Navbar2 extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {    
    return (
        <div>
        <nav className="Navbar2items">
            <img src={accologo} alt="accologo" />
            <h1 className= "Navbar2-logo">ACCOFINDER</h1>
            <div className='menu-icons' onClick= {this.handleClick}>
            <i className={this.state.clicked ? "fa fa-bars" : "fa fa-times" } ></i>
            </div>
            <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index)=> {
                return(
                    <li key={index}>
                    <Link className= {item.cName} to={item.Url}>
                    <i className={item.icon}>
                    </i>{item.title}
                    </Link>
                    </li>
                )
            })}
           
            </ul>
            </nav>
        </div>
    )
}
}

export default Navbar2
