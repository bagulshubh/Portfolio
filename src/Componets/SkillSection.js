import React from 'react'
import SkillCard from './SkillCard'
import { useRef } from 'react'


function SkillSection(props) {
  
  let skillClicked = props.skillClicked
  let setskilledClicked = props.setskilledClicked
  let projectClicked = props.projectClicked

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  if(skillClicked===true){
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  

  

  let skills = ["react","express","javascript","mongodb","node","tailwind","css","html","cpp","java","python","git","postman","cloud","firebase","dsa"]

  return (
    <div className='skill-con' ref={skillsRef}>

      <h2>Skills</h2>

      <div className='skill-card-con'>
        {
          skills.map( (skill)=>{
            return(
              <SkillCard skill={skill}></SkillCard>
            )
          } )
        }
      </div>

    </div>
  )
}

export default SkillSection
