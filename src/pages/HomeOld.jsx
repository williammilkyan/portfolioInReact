import { useState } from 'react';
import { NavComponent } from '../components/NavComponent';
import { MainComponent } from '../components/MainComponent';
import { FooterComponent } from '../components/FooterComponent';

function Home() {
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

export default Home;