import { LOGO_URL } from "../Utils/Constant";

const Header = ()=>{
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
                <button className="login">Login</button>
            </ul>
        </div>
    </div>
    );

};
export default Header;