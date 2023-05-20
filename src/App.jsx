import { useState } from 'react';

import './App.css'

function App() {
  const [isShow, setIsShow] = useState(false);
  function toggleIt(){
    setIsShow(current => !current);
  }

 
  return (
  <div className="all">
     
 
  


     
          <nav>
               <div className="navbox">
                    <a className="navdes" href="https://www.linkedin.com/in/william-yan-0b392b81/" target="_blank">
                         <p1 className="navText">About</p1>
                         <img className="navicon" src="./pic/linkedin.png"/>
                    </a>
               </div>
               <div className="navbox">
                    <a className="navdes" href="https://github.com/williammilkyan?tab=repositories" target="_blank">
                         <p1 className="navText">Projects</p1>
                         <img className="navicon" src="./pic/GitHub-Mark.png"/>
                    </a>
               </div>
               <div className="navbox" id="contactNav">
                    <a className="navdes" onClick={toggleIt}>
                         <p1 className="navText" >Contact</p1>
                         <img className="navicon" src="./pic/contact.png"/>
                    </a>
               </div>
               <div className="navbox">
                    <a className="navdes" href="#skill">
                         <p1 className="navText">Skills</p1>
                         <img className="navicon" src="./pic/skillicon.webp"/>
                    </a>
               </div>
          </nav>
     

  <div className="main-content">
     <div className="description-box">
          <p className="description">Hello, My name is William,</p>
          <p className="description">A Frontend Web Developer </p>
          <p className="description">base in Vancouver, BC, Canada.</p>
     </div>
          <img className="myImage" src="./pic/william.jpg" />
     <div>
          
          <div className="skillContainer" id="skill">
               <img className="skillBox" src="./pic/htmlicon.png"/>
               <img className="skillBox" src="./pic/cssicon.png"/>
               <img className="skillBox" src="./pic/javascripticon.png"/>
               <img className="skillBox" src="./pic/reacticon.png"/>
          </div>
    </div>
 </div>


     
     <div id="contactPlate" style={{
      display: isShow? 'block' : 'none'
     }}>
          <p className="contact">email:williammilkyan@hotmail.com</p>
          <p className="contact">phone:604-XXX-XXXX</p>
     </div>

 




</div>
  )
}

export default App;
