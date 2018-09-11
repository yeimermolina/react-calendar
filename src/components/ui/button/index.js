import React from 'react'

const Button = ({ type = 'button', onClick, content='' }) => (
  <div className="Button">
    <button type={type} onClick={onClick}> {content}</button>
  </div>
)

export default Button
