import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url:"https://dummy-photo.com",
          },
        };
          console.log(this.props.name + "Child Constructor");

  }
 async componentDidMount()
 {
   const data=await fetch("https://api.github.com/users/krishnaraj080601")
   const json =await data.json();
   this.setState({
    userInfo: json,
  });
  console.log(this.props.name + "Child Component Did Mount");
  }
  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    
    return (
        
      <div className="user-card">
    <img src={avatar_url} />
        <h2>{this.state.userInfo.name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}


export default UserClass;
