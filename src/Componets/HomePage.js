import React from 'react'
import NavBar from './NavBar'
import LeftSide from './LeftSide'
import RightSide  from './RightSide'

function HomePage(props) {

  let skillClicked = props.skillClicked
  let setskilledClicked = props.setskilledClicked
  let setprojectClicked = props.setprojectClicked
  let setdsaClicked = props.setdsaClicked;

  return (
    <div className='homepage'>
      
      
        <NavBar skillClicked = {skillClicked} setskilledClicked={setskilledClicked}
         setprojectClicked={setprojectClicked} setdsaClicked={setdsaClicked}></NavBar>

        <div className='side-con' >
            <LeftSide></LeftSide>

            <RightSide></RightSide>
        </div>
        
    
    </div>
  )
}

export default HomePage
