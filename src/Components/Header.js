import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/userContext";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]=useState("login");
    const { loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    return (
    <div  className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
            <img className="w-56"  src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4">
            <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/About">about us</Link></li>
                <li className="px-4">
                   <Link to="/Contact">contact us</Link>
                    </li>
                    <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>   
                <li className="px-4">cart</li>
                
                <button className="login" onClick={()=>{
                     btnNameReact === "Login"
                     ? setBtnNameReact("Logout")
                     : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
                 <li className="px-4 ">{loggedInUser}</li>
                </ul>

        </div>
    </div>
    );

};
export default Header;