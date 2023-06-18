import './App.css';
import HomePage from './Componets/HomePage';
import SkillSection from './Componets/SkillSection';
import About from './Componets/About';
import ProjectSection from './Componets/ProjectSection';
import OtherProject from './Componets/OtherProject';
import { useEffect, useState } from 'react';

function App() {

  let [skillClicked,setskilledClicked] = useState(false);
  let [projectClicked,setprojectClicked] = useState(false);
  /*to know when user is at top of the web application*/
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  if(isAtTop){
    setprojectClicked(false);
    setskilledClicked(false);
    setIsAtTop(false);
  }

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);

  return (
    <div className="App">
      
      <HomePage skillClicked = {skillClicked} setskilledClicked={setskilledClicked}setprojectClicked={
        setprojectClicked
      }></HomePage>

      <About></About>

      <ProjectSection projectClicked={projectClicked}></ProjectSection>

      <OtherProject></OtherProject>

      <SkillSection skillClicked = {skillClicked} setskilledClicked={setskilledClicked} ></SkillSection>

    </div>
  );
}

export default App;
