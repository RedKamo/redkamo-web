import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import "../styles.styl";
//import * as foto from "../assets/images/foto.jpg";
//import * as nasa1 from '../assets/ic.png';

//const foto = require("../assets/images/foto.jpg");

function HelloWorld(): JSX.Element {
  return(
    <div className="container">
      <div className="container__card">
        <h1>🚧 Hi, Im Camilo Suarez a.k.a "RedKamo" and this Website its under Construction...🚧</h1>
       {/*  <img src={String(foto)} alt=""/>
        <img src={nasa1 } alt=""/> */}
      </div>
    </div>
  )
}

export default hot(HelloWorld);