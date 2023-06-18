import React from 'react'
import ProjectCard from './ProjectCard'
import razor from '../Assets/razorpay.png'
import discord from '../Assets/discord.png'
import zomato from '../Assets/zomato.png'
import yelp from '../Assets/yelp.png'

function CloneSection() {

    let obj = [
        {
            img:razor,
            para:"The RazorPay Clone is a visually appealing web application developed using Tailwind CSS. It offers users a seamless payment processing experience, allowing them to make secure online payments. This project showcases the integration of Tailwind CSS to create a modern and user-friendly payment solution resembling the functionality of RazorPay.",
            heading : "RazorPay",
            link : "https://github.com/bagulshubh/RazorPay-Clone",
            techstack : ["html","tw","css"],
        },
        {
            img:discord,
            para:"The Discord clone is a responsive web application resembling the popular messaging platform. It utilizes HTML and is styled with Tailwind CSS, offering a utility-based approach for efficient styling. The combination of Tailwind CSS and HTML results in a visually appealing and user-friendly interface for seamless communication.",
            heading:"Discored",
            link:"https://github.com/bagulshubh/Discord-Clone",
            techstack: ["html","tw","css"],
        },
        {
            img:zomato,
            para:"The Zomato clone is a web application inspired by the popular food delivery platform. It is built using HTML, CSS, and JavaScript, providing a robust foundation for creating dynamic and interactive features. With HTML for structure, CSS for styling, and JavaScript for interactivity, the Zomato clone offers a user-friendly interface for browsing restaurants, exploring menus, and placing food orders.",
            heading:"Zomato",
            link:"https://github.com/bagulshubh/Zomato-Clone",
            techstack : ["html","css","js"],
        },
        {
            img:yelp,
            para:"The Yelp clone is a web application replicating the features of the popular business review platform. Developed with HTML, CSS, and JavaScript, it enables users to search, review, and rate local businesses. The clone offers an intuitive interface for browsing listings, accessing business information, and sharing feedback within a dynamic and interactive environment.",
            heading:"Yelp",
            link:"https://github.com/bagulshubh/Yelp-clone",
            techstack : ["html","css","js"],
        },
    ]


  return (
    <div className='clone-con'>
      
        {
            obj.map( (o)=>{
                return(
                    <ProjectCard img={o.img} link={o.link} heading={o.heading} para={o.para} techstack={o.techstack} from="clone"></ProjectCard>
                )
            })
        }

    </div>
  )
}

export default CloneSection
