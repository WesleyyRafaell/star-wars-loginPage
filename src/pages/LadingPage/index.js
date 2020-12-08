import { Lottie } from '@crello/react-lottie';

import animationData from  '../../animation.json'; 

import './index.css';

import sw_logo from '../../assets/img/sw_logo.png';
import capa from '../../assets/img/capa1.png';

function LadingPage() {

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
              <Lottie 
                config={{
                  animationData: animationData,
                  loop: true
                }}
                height={100}
                width={100}
                playingState={'playing'}/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LadingPage;
