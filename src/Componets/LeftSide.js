import React from 'react'
import Socials from './Socials'

const LeftSide = () => {

    const ChatHandler= () =>{

        window.location.href = "mailto:bagulshubham72@gmail.com";

    }

  return (
    <div className='leftside'>
      
        <h1 className='heading'>Shubham <br></br> Bagul </h1>
        <p className='left-para'>FullStack Developer, Software Developer,<br></br>  Programmer.</p>
        <Socials></Socials>
        <button className='chat' onClick={ChatHandler}>Let's Chat</button>

    </div>
  )
}

export default LeftSide
