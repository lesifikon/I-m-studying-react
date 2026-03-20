import React, { Component } from 'react'
import Header from './components/Header';
import {Carousel} from './components/Carousel';
import Information from './components/Information';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Ваш путь в мир хорошей музики!</h2>
        <div className='carousel'>
          <Carousel>
            <div className='item item-1'>Item 1</div>
            <div className='item item-2'>Item 2</div>
            <div className='item item-3'>Item 3</div>
          </Carousel>
        </div>
        <Information />
      </div>
    )
  }
}

export default App;