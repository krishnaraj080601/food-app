import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    const onlineStatus = useOnlineStatus();
    return (
    <div  className="flex justify-between">
        <div className="logo-container">
            <img className="w-56"  src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
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
                    <li>
            <Link to="/grocery">Grocery</Link>
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