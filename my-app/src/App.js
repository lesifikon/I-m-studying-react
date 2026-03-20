import React, { Component } from 'react'
import Header from './components/Header';
import Choice from './components/Choice';
import Information from './components/Information';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Ваш путь в мир хорошей музики!</h2>
        <Choice />
        <Information />
      </div>
    )
  }
}

export default App;