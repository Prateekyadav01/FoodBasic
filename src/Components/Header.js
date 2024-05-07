import logo from './logo.svg';
import "./header.css";
import { Link } from 'react-router-dom';

function Header(){
    const changeColor = (e)=>{
        
        document.querySelectorAll(".navlink").forEach((ele)=>{
            ele.classList.remove("blue");
        });
        e.target.parentElement.classList.add("blue");
    }
    return(
        <header>
            <div className= "logo">
                <img src={logo} alt="logo"/>
                <h1 className="logoName">GeekFoods</h1>
            </div>

            <ul className="navbar">
                <li className="navlink blue"><Link  onClick={changeColor} to="/">Home</Link></li>
                <li className="navlink"><Link  onClick={changeColor} to="/quote">Quote</Link></li>
                <li className="navlink"><Link  onClick={changeColor} to="/restaurant">Restaurants</Link></li>
                <li className="navlink"><Link  onClick={changeColor} to="/restaurant">Foods</Link></li>
                <li className="navlink"><Link  onClick={changeColor} to="/contact">Contact</Link></li>
            </ul>

            <div className="menu">
                <button className="getStarted">Get started</button>

                <i className="fa-solid fa-bars menuIcon" id="menuIcon"></i>
            </div>
        </header>
    );
}

export default Header;