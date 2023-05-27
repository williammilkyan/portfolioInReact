export function MainComponent () {
    return (
        <div className="main-content">
     <div className="description-box">
          <p className="description">Hello, My name is William,</p>
          <p className="description">A Frontend Web Developer </p>
          <p className="description">base in Vancouver, BC, Canada.</p>
     </div>
          <img className="myImage" src="/pic/william.jpg" />
     <div>
          
          <div className="skillContainer" id="skill">
               <img className="skillBox" src="/pic/htmlicon.png"/>
               <img className="skillBox" src="/pic/cssicon.png"/>
               <img className="skillBox" src="/pic/javascripticon.png"/>
               <img className="skillBox" src="/pic/reacticon.png"/>
          </div>
        </div>
    </div>
    )
}