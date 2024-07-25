import linkedin from "/src/pic/linkedin.png";
import github from "/src/pic/GitHub-Mark.png";
import contact from "/src/pic/contact.png";
import skillicon from "/src/pic/skillicon.webp";


export function NavComponent ({onClick}) {
    return (
        <nav>
               <div className="navbox">
                    <a className="navdes" href="https://www.linkedin.com/in/william-yan-0b392b81/" target="_blank">
                         <p className="navText">About</p>
                         <img className="navicon" src={linkedin}/>
                    </a>
               </div>
               <div className="navbox">
                    <a className="navdes" href="https://github.com/williammilkyan?tab=repositories" target="_blank">
                         <p className="navText">Projects</p>
                         <img className="navicon" src={github}/>
                    </a>
               </div>
               <div className="navbox" id="contactNav">
                    <a className="navdes" onClick={onClick}>
                         <p className="navText" >Contact</p>
                         <img className="navicon" src={contact}/>
                    </a>
               </div>
               <div className="navbox">
                    <a className="navdes" href="#skill">
                         <p className="navText">Skills</p>
                         <img className="navicon" src={skillicon}/>
                    </a>
               </div>
          </nav>
    )
}