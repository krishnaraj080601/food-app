import React from 'react'
import User from './User'
import UserClass from './Userclass'

const About = () => {
  return (
    <div>
        <h1>about</h1>
        <h2>food ordering website</h2>
        <User/>
        <UserClass name={krishna} location={neyveli}/>
    </div>
  )
}

export default About