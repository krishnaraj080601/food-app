import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      count:0,
    };
  }
  render() {

    const { name, location} = this.props;
    const { count, count2} = this.state;
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button onClick={()=>{this.setState({
            count:this.state.count+1
        })}}>count increase</button>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}


export default UserClass;
