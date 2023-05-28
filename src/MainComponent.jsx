import myPicture from "/src/pic/william.jpg";
import htmlicon from "/src/pic/htmlicon.png";
import cssicon from "/src/pic/cssicon.png";
import javascripticon from "/src/pic/javascripticon.png";
import reacticon from "/src/pic/reacticon.png";


export function MainComponent () {
    return (
        <div className="main-content">
     <div className="description-box">
          <p className="description">Hello, My name is William,</p>
          <p className="description">A Frontend Web Developer </p>
          <p className="description">base in Vancouver, BC, Canada.</p>
     </div>
          <img className="myImage" src={myPicture} />
     <div>
          
          <div className="skillContainer" id="skill">
               <img className="skillBox" src={htmlicon}/>
               <img className="skillBox" src={cssicon}/>
               <img className="skillBox" src={javascripticon}/>
               <img className="skillBox" src={reacticon}/>
          </div>
        </div>
    </div>
    )
}