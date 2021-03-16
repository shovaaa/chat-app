import React from 'react';

export default function Button({ btnText, btnType, className, link }) {
  return (
    <a href={link}>
      <button type={btnType} className={className}>{btnText}</button>
    </a>
  )
}