import * as React from 'react';
//import styles from './HelloWorldPriyanka.module.scss';
import { IHelloWorldPriyankaProps } from './IHelloWorldPriyankaProps';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorldPriyanka extends React.Component<IHelloWorldPriyankaProps, {}> {
  public render(): React.ReactElement<IHelloWorldPriyankaProps> {
    

    return (
<div><h1>This is my first webpart</h1></div>

    );
  }
}
