import React from 'react';
import './LargeInputBox.scss';

export default function LargeInputBox ({id, name, placeholder}) {
  return (
    <input type="text" id={id} name={name} className="inputBox-lg" placeholder={placeholder}></input>
  )
}