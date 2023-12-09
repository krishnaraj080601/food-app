import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      count:0,
      count2:2
    };
  }
  render() {

    const { name, location} = this.props;
    const { count, count2} = this.props;
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}


export default UserClass;
