import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
          },
    };
  }
 async componentDidMount()
 {
   const data=await fetch("https://api.github.com/users/krishnaraj080601")
   const json =await data.json();
   this.setState({
    userInfo: json,
  });
  }
  render() {

    
    return (
      <div className="user-card">
        <h2>{this.state.userInfo.name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}


export default UserClass;
