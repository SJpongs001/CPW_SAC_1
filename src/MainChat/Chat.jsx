import React from 'react'
import Cam from "./img/cam.png";
import Add from "./img/add.png";
import More from "./img/more.png";
import Messages from './Messages';
import InputChat from './InputChat';

export default function Chat() {
  return (
    <div className='chat'>
      <div className='chatInfo'>
      <span>KAMEN RIDER DEN-O</span>
          <div className ='chatIcons'>
            <img src= {Cam} alt='' />
            <img src= {Add} alt='' />
            <img src= {More} alt='' />
          </div>    
      </div>
      <Messages />
      <InputChat />
    </div>
  )
}
