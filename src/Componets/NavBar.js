import React from 'react'
import { useRef } from 'react';


const NavBar = (props) => {

  let skillClicked = props.skillClicked
  let setskilledClicked = props.setskilledClicked
  let setprojectClicked = props.setprojectClicked

  const skillsRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    // skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    setskilledClicked(true);
    setprojectClicked(false);
  };

  const clickHandler = () =>{
    setskilledClicked(false);
    setprojectClicked(true);
  }



  return (
    <div className='navbar'>
      
      <div className='navitem' onClick={scrollToTop}>
        Home
        <div className='blue-line'></div>
      </div>
      <div className='navitem' onClick={scrollToSkills}>
          Skills
          <div className='blue-line'></div>
      </div>
      <div className='navitem' onClick={clickHandler}>
          Projects
          <div className='blue-line'></div>
      </div>
      <div className='navitem'>
          Leetcode
          <div className='blue-line'></div>
      </div>

    </div>
  )
}

export default NavBar
