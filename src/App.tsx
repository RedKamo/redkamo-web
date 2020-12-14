import * as React from 'react';

export interface HelloWorldProps{
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <div>{props.userName} from React! Welcome to {props.lang}!</div>
)
