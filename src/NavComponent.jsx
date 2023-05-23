export function NavComponent ({onClick}) {
    return (
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
                    <a className="navdes" onClick={onClick}>
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
    )
}