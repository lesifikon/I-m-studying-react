import React, { Component } from 'react'
import Header from './components/Header';
import {Carousel} from './components/Carousel';
import Information from './components/Information';
import './index.css'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      information: [
        {
          id: 0,
          text: 'Бас-гитара — это струнно-щипковый электромузыкальный инструмент, создающий низкочастотный фундамент (бас) и ритмическую основу (грув) в музыкальной композиции. Обычно  имеет 4 толстые струны, удлиненный гриф и звучит на октаву ниже  электрогитары, связывая ритм ударных с гармонией остальных инструментов',
        },
        {
          id: 1,
          text: 'электромузыкальающийнизкочасфамическусновурумузыкальнойкомпозицииОбычноимеетолстыеструныдлиненныйиитоктавужэлектрогитарывязываритударныхармониейстальныхинструментов',
        },
        {
          id: 2,
          text: 'я крутой програмист',
        },
      ]
    }
  }

  updateIndex = (newIndex) => {
        if (this.state.activeIndex !== newIndex) {
            this.setState({ activeIndex: newIndex });
        }
    }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Ваш путь в мир хорошей музыки!</h2>
        <div className='carousel'>
          <Carousel onIndexChange={this.updateIndex}>
            <div className='item item-1'>Item 1</div>
            <div className='item item-2'>Item 2</div>
            <div className='item item-3'>Item 3</div>
          </Carousel>
        </div>
        <Information activeIndex={this.state.activeIndex} information={this.state.information}/>
      </div>
    )
  }

  decided(index) {
    let text;
    if (index === 0) text = this.state.information.text
    else if (index === 1) text = this.state.information.text1
    else if (index === 2) text = this.state.information.text2 
    return text
  }


}

export default App;