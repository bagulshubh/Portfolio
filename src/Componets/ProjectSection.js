import React from 'react'
import img from '../Assets/Movie-Database.png'
import img1 from '../Assets/2048.png'
import img2 from '../Assets/devdetective.png'
import img3 from '../Assets/quiz.png'
import img4 from '../Assets/todo.png'
import img5 from '../Assets/bitcoin.png'

import ProjectCard from './ProjectCard'
import ProjectCardodd from './ProjectCardodd'

import { useRef } from 'react'

function ProjectSection(props) {
    const projectsRef = useRef(null);
    let projectClicked=props.projectClicked

    if(projectClicked===true){
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    let para = ["The Movie Database is a comprehensive web application developed using React.js and API integration that covers not only movies but also series and anime. This versatile platform allows users to explore an extensive database of multimedia content, including movies, TV series, and anime shows. By utilizing APIs, the application dynamically retrieves and presents information such as titles, release dates, genres, ratings, and summaries for each category. With its intuitive interface and seamless integration of React.js components, the Movie Database offers a one-stop solution for users to discover and stay updated on a wide range of multimedia content, catering to the diverse interests of entertainment enthusiasts." , "The 2048 game is a popular puzzle game where the goal is to combine number tiles to reach the elusive 2048 tile. In this project, React, a JavaScript library, is utilized to build an interactive and engaging version of the game. React's component-based architecture allows for the efficient management of the game's state, rendering dynamic updates as the player interacts with the board. Through React's virtual DOM, the game achieves smooth performance and responsiveness, providing an enjoyable gaming experience for users.","The Dev Detective project is a web application built using HTML, Tailwind CSS, and JavaScript. It allows users to search for any GitHub user by entering their username. By utilizing APIs, the application fetches the user's information, such as their repositories, followers, and public activity. This project showcases the integration of frontend technologies with the GitHub API to provide a user-friendly interface for exploring GitHub profiles.","The Quiz App is a dynamic web application created using HTML, CSS, and JavaScript. This interactive app allows users to participate in quizzes on various topics. To provide a diverse range of questions, the app leverages an API to fetch quiz data from a remote server. Users can select their preferred category or topic, and the app generates random questions for them to answer. It demonstrates the integration of frontend technologies with an API to create an engaging and educational quiz experience for users.","The To-Do App is a simple web application developed using HTML, CSS, and JavaScript. It provides users with a convenient way to manage their tasks and stay organized. The app allows users to create a list of tasks, mark them as complete, and remove them when necessary. It offers an intuitive user interface with interactive features, such as checkboxes and buttons, to streamline task management. This project showcases the use of frontend technologies to create a practical and user-friendly application for tracking and organizing daily tasks.","The Crypto Info React app is a dynamic web application that offers real-time information about multiple cryptocurrencies. Developed using React, this app integrates with APIs that provide live data on various cryptocurrencies, including their prices, market capitalization, trading volumes, and more. Users can explore and track the performance of different cryptocurrencies, gaining insights into the overall crypto market. With its intuitive user interface and responsive design, the app allows users to stay updated on the latest information and trends in the world of cryptocurrencies."];

    let heading = ["Movie Database","2048 Game","Dev Detective","Quiz App","TODO App","Cryptocurrency Info"];

    let no = [0,1,2,3,4,5]

    let imgarr = [img,img1,img2,img3,img4,img5];

    let link = ["https://moviedatabaseshubh.netlify.app/","https://github.com/bagulshubh/2048_Game","https://github.com/bagulshubh/Dev-Detective","https://github.com/bagulshubh/Quiz-WebPage","https://github.com/bagulshubh/TO-DO-List","https://github.com/bagulshubh/Cryptocurrency-Application"]

    let techstack = [ ["react","css","html","js","tw"], ["react","css","html","js"] ,["css","html","js","tw"],["css","html","js","tw"],["css","html","js","tw"],["react","css","html","js"]]

    

  return (
    <div className='project-con' ref={projectsRef}>
        <h1 className='project-heading'>PROJECTS</h1>

        <div className='project-card-con'>

            {
                no.map( (i)=>{
                    return(
                        
                            i%2===0 ? (
                                <ProjectCard img={imgarr[i]} para={para[i]} heading = {heading[i]} link={link[i]} techstack={techstack[i]} ></ProjectCard>
                            ):(
                                <ProjectCardodd img={imgarr[i]} para={para[i]} heading = {heading[i]} link={link[i]} techstack={techstack[i]}></ProjectCardodd>
                            )
                        
                        
                    )
                } )
            }

        </div>


    </div>
  )
}

export default ProjectSection
