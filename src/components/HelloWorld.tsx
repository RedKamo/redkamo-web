import * as React from 'react';

import "../styles.styl";
 
import * as nasa1 from '../assets/images/nasa1.png';

function HelloWorld(): JSX.Element {
  return(
    <div className="container">
      <div className="container__card">
        <h1>Hi, Im Camilo Suarez, A Frontend who loves code and design.</h1>
        <img src={ nasa1 } alt=""/>
      </div>/
    </div>
  )
}

export default HelloWorld;