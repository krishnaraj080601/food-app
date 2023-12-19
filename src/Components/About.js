import React, { Component } from 'react'
import UserClass from './Userclass'
import usercontext from '../Utils/usercontext';
class About extends Component{
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }


  render(){
  return (
    <div>
        <h1>about</h1>
        <div>
          <usercontext.Consumer>
          {({loggedInUser})=> <h1>{loggedInUser}</h1>}
          </usercontext.Consumer>
        </div>
        <h2>food ordering website</h2>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"krishnaraj.G"} location={"Neyveli TS"}/>
    </div>
  )
}
}

export default About
/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */