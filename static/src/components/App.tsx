import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Table } from './Table/Table';

export class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Table />
        <Footer />
      </div>
    );
  }
}