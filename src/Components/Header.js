import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
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