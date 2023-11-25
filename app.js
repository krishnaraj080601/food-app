import React from "react";
import ReactDOM from "react-dom/client";
const header = ()=>{
    return (
    <div className="header">
        <div className="logo-design">
            <img src="https://www.codester.com/static/uploads/items/000/017/17176/preview-xl.jpg"/>
        </div>
        <div className="nav items">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
            </ul>
        </div>
    </div>
    )

}
const applayout =() =>{
    return(
        <div className="app"><header/></div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(applayout);
