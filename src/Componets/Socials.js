import React from 'react'
import {BsLinkedin,BsFacebook,BsYoutube} from 'react-icons/bs'
import {AiOutlineGithub,AiFillInstagram} from 'react-icons/ai'


function Socials() {
  return (
    <div className='socials'>
      
      <a href='https://www.linkedin.com/in/shubham-bagul-831533253/' target='blank'><BsLinkedin className='icon1'></BsLinkedin></a>

      <a href='https://github.com/bagulshubh' target='blank'><AiOutlineGithub className='icon1'></AiOutlineGithub></a>

      <a href='https://www.instagram.com/shubham_bagul_7219/' target='blank'><AiFillInstagram className='icon1'></AiFillInstagram></a>

      <a><BsFacebook className='icon1'></BsFacebook></a>

      <a><BsYoutube className='icon1'></BsYoutube></a>

    </div>
  )
}

export default Socials
