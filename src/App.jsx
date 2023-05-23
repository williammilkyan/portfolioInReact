import { useState } from 'react';

import './App.css'
import { NavComponent } from './NavComponent';
import { MainComponent } from './MainComponent';
import { FooterComponent } from './FooterComponent';
function App() {
  const [isShow, setIsShow] = useState(false);
  function toggleIt(){
    setIsShow(current => !current);
  }

 
  return (
     <div className="all">
          <NavComponent onClick={toggleIt}/>
          <MainComponent />
          <FooterComponent isShow={isShow}/>
     </div>
  )
}

export default App;
