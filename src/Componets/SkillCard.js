import React from 'react'
import {FaReact,FaCss3,FaJava,FaPython} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss,SiHtml5,SiNodedotjs,SiPostman,SiFirebase,SiThealgorithms} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'
import {TbBrandCpp} from 'react-icons/tb'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineCloudUpload} from 'react-icons/ai'

function SkillCard(props) {
    let skill = props.skill

    if(skill==="react"){
        return(
            <div className='skill-card' >

            {skill.toUpperCase()}
            <FaReact className='skill-icon react'></FaReact>
            </div>
        )
    }
    if(skill==="express"){
        return(
            <div className='skill-card' >{skill.toUpperCase()}
            <SiExpress className='skill-icon express'></SiExpress></div>
        )
    }
    if(skill==="javascript"){
        return(
            <div className='skill-card' >{skill.toUpperCase()}
            <IoLogoJavascript className='skill-icon js'></IoLogoJavascript></div>
        )
    }
    if(skill==="mongodb"){
        return( 
        <div className='skill-card' >{skill.toUpperCase()}
            <DiMongodb className='skill-icon mongo'></DiMongodb></div>
        )
    }
    if(skill==="node"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiNodedotjs className='skill-icon node'></SiNodedotjs></div>
        )
    }
    if(skill==="tailwind"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiTailwindcss className='skill-icon css'></SiTailwindcss></div>
        )
    }
    if(skill==="css"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <FaCss3 className='skill-icon  css'></FaCss3></div>
        )
    }
    if(skill==="html"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiHtml5 className='skill-icon html'></SiHtml5></div>
        )
    }
    if(skill==="cpp"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <TbBrandCpp className='skill-icon cpp'></TbBrandCpp></div>
        )
    }
    if(skill==="java"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <FaJava className='skill-icon java'></FaJava></div>
        )
    }
    if(skill==="python"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <FaPython className='skill-icon python'></FaPython></div>
        )
    }
    if(skill==="git"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <BsGithub className='skill-icon git'></BsGithub></div>
        )
    }
    if(skill==="postman"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiPostman className='skill-icon postman'></SiPostman></div>
        )
    }
    if(skill==="cloud"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <AiOutlineCloudUpload className='skill-icon cloud'></AiOutlineCloudUpload></div>
        )
    }
    if(skill==="firebase"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiFirebase className='skill-icon firebase'></SiFirebase></div>
        )
    }
    if(skill==="dsa"){
        return (
        <div className='skill-card' >{skill.toUpperCase()}
            <SiThealgorithms className='skill-icon dsa'></SiThealgorithms></div>
        )
    }

}

export default SkillCard
