import React from "react";
import ReactDOM from "react-dom/client";
const Header = ()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOi9-KJVKszed17zhOdfxitHm7A5wcOrftg&usqp=CAU"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>cart</li>
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
