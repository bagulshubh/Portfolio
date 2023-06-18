import React from 'react'
import {AiOutlineMail,AiOutlineDownload,AiFillEye} from 'react-icons/ai'



function About() {

    const ChatHandler= () =>{

        window.location.href = "mailto:bagulshubham72@gmail.com";

    }

  return (

    <div className='about-app'>

        <div className='about-con'>
        
            <div className='left-side-about'>
                <h1 className='about-heading'>About Me</h1>
                <p className='about-para'>As a highly skilled and innovative Full-Stack Developer, I excel in a wide range of technologies including React, HTML, CSS, JavaScript, Express, MongoDB, Firebase, API, and Node.js. With a passion for crafting visually stunning user interfaces and developing powerful server-side applications, I consistently strive to deliver exceptional web experiences that captivate and engage users. Continuously staying at the forefront of emerging technologies and industry trends, I am driven to push the boundaries of innovation and create truly impactful projects. With a keen eye for detail and a dedication to excellence, I am ready to transform ideas into reality and deliver exceptional results.</p>
                <p className='about-para'>With a strong passion for problem-solving and algorithmic thinking, I have gained extensive experience in Data Structures and Algorithms (DSA). Having successfully solved over 350 challenging questions and actively participated in multiple competitions, I have honed my skills in creating efficient and optimized solutions. </p>
            </div>

            <div className='right-side-about'>
                <h2 className='right-heading'>Any Type Of Query & Discussion</h2>
                
                <div className='email' onClick={ChatHandler}> <AiOutlineMail className='email-icon'></AiOutlineMail> bagulshubham72@gmailcom</div>

                <div className='button-con-about'>
                    <a href='https://drive.google.com/drive/folders/1h4MreIUfa-bu8-QePmxwui7_Jl9f0Yay?usp=sharing' target='blank'> <button className='res'><AiFillEye></AiFillEye> View Resume</button> </a>

                    <a href='../Assets/Resume_Copy_.pdf' download> <button className='res'><AiOutlineDownload></AiOutlineDownload>  Download Resume</button>  </a>
                    
                               
                </div>

            </div>

        </div>
    </div>

  )
}

export default About
