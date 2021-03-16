import React from 'react';
import './SmallInputBox.scss';

export default function SmallInputBox ({id, name, placeholder}) {
  return (
    <input type="text" id={id} name={name} className="inputBox-sm" placeholder={placeholder}></input>
  )
}