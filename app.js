import React from "react";
import ReactDOM from "react-dom/client";
const Header = ()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="/>
        </div>
        <div className="nav-items">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>cart</li>
                <li>hello </li>
            </ul>
        </div>
    </div>
    );

};
const Applayout =() =>{
    return(
        <div className="app">
            <Header/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
