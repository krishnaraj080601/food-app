import React, { Component } from 'react'
import User from './User'
import UserClass from './Userclass'

class About extends Component{
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render(){
  return (
    <div>
        <h1>about</h1>
        <h2>food ordering website</h2>
        <User/>
        <UserClass name={"krishnaraj.G"} location={"Neyveli TS"}/>
    </div>
  )
}
}

export default About