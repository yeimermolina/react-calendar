import React from 'react'

const Input = ({type = 'text', name, handleChange, value}) => (
  <div className='Input'>
    <input 
      type={type}
      name={name}
      onChange={handleChange}
      value={value}
    />
  </div>
)

export default Input
