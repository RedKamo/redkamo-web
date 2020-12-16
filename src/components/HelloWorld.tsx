import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import "../styles.styl";
//import * as foto from "../assets/images/foto.jpg";

const foto = require("../assets/images/foto.jpg");

function HelloWorld(): JSX.Element {
  return(
    <div className="container">
      <div className="container__card">
        <h1>Hi, Im Camilo Suarez, A Frontend who loves code and design.</h1>
        <img src={String(foto)} alt=""/>
      </div>
    </div>
  )
}

export default hot(HelloWorld);