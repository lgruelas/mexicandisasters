import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}