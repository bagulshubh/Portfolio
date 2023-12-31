import React from 'react'
import {FaReact,FaCss3} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss,SiHtml5} from 'react-icons/si'

function ProjectCardodd(props) {
    let img = props.img;
    let para = props.para;
    let heading = props.heading;
    let link = props.link;
    let techstack = props.techstack
  return (
    <div className='project-card'>
            
                
                <div className='project-info'>
                    <a href={link} target='blank'><h2>{heading}</h2></a>
                    <a href={link} target='blank' className='source'>Source Code</a>
                    {para}
                </div>

                <a className='project-img' href={link} target='blank'><img src={img}></img>
                
                <div className='techstack-con'>
                {
                    techstack.includes("react")? (<FaReact className='react tech-icon'></FaReact>):(<div></div>)
                    
                }
                {
                    techstack.includes("js")? (<IoLogoJavascript className='js tech-icon'></IoLogoJavascript>):(<div></div>)
                }
                {
                    techstack.includes("css")? (<FaCss3 className='css tech-icon'></FaCss3>):(<div></div>)
                }
                {
                    techstack.includes("html")? (<SiHtml5 className='html tech-icon'></SiHtml5>):(<div></div>)
                }
                {
                    techstack.includes("tw")? (<SiTailwindcss className='tw tech-icon'></SiTailwindcss>):(<div></div>)
                }
               
                
            </div>

                </a>
        </div>
  )
}

export default ProjectCardodd
