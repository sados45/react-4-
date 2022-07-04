import React, { Component } from 'react'
import './Body.css' // actigimiz body css i body jsx icine import ettik. 

export default class body extends Component {
  render() {
    return (
      <div>
        <p className='user-name'>Kullanici Adi ={this.props.name}</p>
       <p className= 'user-age'>Kullanici Yasi={this.props.age}</p> 
        <p className='user-course'>Basvurulan Kurs ={this.props.course}</p>
        <button className='btn'>Submit</button>
      </div>
    )
  }
}
