import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    const onlineStatus = useOnlineStatus();
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
            <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/About">about us</Link></li>
                <li>
                   <Link to="/Contact">contact us</Link>
                    </li>
                <li>cart</li>
                
                <button className="login" onClick={()=>{
                     btnNameReact === "Login"
                     ? setBtnNameReact("Logout")
                     : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
                </ul>
        </div>
    </div>
    );

};
export default Header;