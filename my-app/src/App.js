
//STATE AND PROPS _______________________
import React, { Component } from 'react'
import './App.css';
import Body from './components/Body';
import Header from  './components/Header';
import Footer from './components/Footer';

export default class App extends Component {


  state ={

    name:'Ihsan',
    age:'45',
    course: 'react',
    no:'442',
    school:'Giessen University',
    drill:'drill'
  }
  render() {
    return (

      <>
      <Header title = 'Welcome to Main Page'/>
       <Body 
       name = {this.state.name}
       age= {this.state.age}
       course={this.state.course}
       
       />
       <p className='paragraph'>blue</p>
       <Footer/>
     

      </>
    )
  }
}

