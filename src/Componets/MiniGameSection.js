import React from 'react'
import ProjectCard from './ProjectCard'
import colorguss from '../Assets/colorgussing.png'
import ox from '../Assets/ox game.png'
import wam from '../Assets/wam.png'


function MiniGameSection() {

  let obj = [

    {
      img:colorguss,
      para:"The color guessing game is a dynamic web application built with HTML, CSS (including Tailwind CSS), and JavaScript. Users are challenged to guess the correct color based on RGB values or color names, providing an engaging and interactive experience. JavaScript handles user input, generates random colors, and evaluates the accuracy of guesses, making it an enjoyable game for testing color recognition skills.",
      heading:"Color Guessing",
      link:"https://github.com/bagulshubh/Color-Gussing-Game",
      techstack: ["html","tw","css","js"],
    },
    {
      img:ox,
      para:"The OX game, also known as Tic-Tac-Toe, is a classic web-based game developed using HTML, CSS (including Tailwind CSS), and JavaScript. Players take turns to place their respective symbols (X or O) on a 3x3 grid, aiming to create a winning pattern. The game utilizes JavaScript to handle user interactions, validate moves, and determine the game's outcome, providing an enjoyable and competitive gaming experience within a visually appealing interface created with HTML and Tailwind CSS.",
      heading:"OX",
      link:"https://github.com/bagulshubh/OX-Game",
      techstack: ["html","tw","css","js"],
    },
    {
      img:wam,
      para:"The Whack-a-Mole game is an interactive web-based game developed using HTML, CSS, and JavaScript. Players aim to whack appearing moles by clicking on them. HTML provides the structure, CSS styles the game elements for an appealing visual experience, and JavaScript handles the game logic, including mole appearances and scoring. With the time limit removed, players can enjoy an endless gameplay experience and focus on achieving high scores by whacking as many moles as possible.",
      heading:"Whack A Mole",
      link:"https://github.com/bagulshubh/Whack-A-Mole",
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

export default MiniGameSection
