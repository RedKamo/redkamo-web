import * as React from 'react';
import { hot } from 'react-hot-loader/root';

//--Import assets/images //
import * as init from '../assets/images/image_ini.png';

//--Import Icons --- [react icons library]//
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

//--Import styles//
import "../styles.styl";


function HelloWorld(): JSX.Element {
  return(
    <div className="container">
      <div className="container__card">
        <div className="container__card--info">
          <h1>Hi, I'm <span className="change">Red</span>Kamo a FrontEnd developer and this Website its under Construction</h1>
        </div>
        <div className="container__card--social">
          <a href="https://twitter.com/RedKamo_" target="_blank"><FaTwitter size={60} /></a>
          <a href="https://github.com/RedKamo" target="_blank"><FaGithub size={60} /></a>
          <a href="https://www.instagram.com/camilosuarezt/" target="_blank"><FaInstagram size={60} /></a>
        </div>        
      </div>
      <div className="container__image">
        <img src={ init } alt=""/>
      </div>
    </div>
  )
}

export default hot(HelloWorld);


