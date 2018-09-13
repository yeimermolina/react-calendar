import React from 'react'

const Input = ({type = 'text', name, handleChange, value, label}) => (
  <div className='Input'>
    <label>{label}:</label>
    <input 
      min={1}
      type={type}
      name={name}
      onChange={handleChange}
      value={value}
    />
  </div>
)

export default Input
