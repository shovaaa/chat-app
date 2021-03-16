import React from 'react';
import './Grid.scss';

export default function Grid (props) {
  return (
    <div className="grid-container">
      {props.children}
    </div>
  )
}