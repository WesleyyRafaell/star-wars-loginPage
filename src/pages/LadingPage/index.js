import { useState } from 'react';
import Lottie from 'react-lottie';

import animationData from  '../../animation.json'; 

import './index.css';

import sw_logo from '../../assets/img/sw_logo.png';
import capa from '../../assets/img/capa1.png';

function LadingPage() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <main className="mainStar">
      <div className="container">
        <div className="boxImages">
          <header>
            <img className="logo" src={sw_logo} alt="logo star wars"/>
          </header>
          <main>
            <img  className="capa-destaque" src={capa} alt="capa destaque star wars"/>
          </main>
        </div>
        <div className="boxForm">
          <h3>Hello, <span>Welcome Back!</span></h3>
          <form action="">
            <div className="inputBlock">
              <input type="text" placeholder="your e-mail"/>
            </div>
            <div className="inputBlock">
              <input type="text" placeholder="password"/>
            </div>
            <div className="inputBlockButton">
              <button>Login</button>
            </div>
            <div className="animation">
              <Lottie options={defaultOptions}
                height={100}
                width={100}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LadingPage;
