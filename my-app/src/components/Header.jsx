import React, { Component } from 'react'
// import './Header.css'
import style from './Header.module.css' // ÖNEMLI module.css ler kullanilirsa cakismalarin önüne gecilebiliyor. css te. 

export default class Header extends Component {
  render() {

  

    // const buttonStyle = {
    //     backgroundColor:'yellow',
    //     color:'blue',
    //     width:'100px',
    //     height:'30px',
    //     borderRadius:'8px'
    // }
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button className={style.btn}>Submit</button>
        {/* <button style={buttonStyle}>Submit</button> */}

        {/* <button className='btn'>Submit</button> */}
        {/* <button style= {{
            backgroundColor:'yellow',
            color:'blue',
            width:'100px',
            height:'30px',
            borderRadius:'8px'
            }} ></button> */}
      </div>
    )
  }
}
