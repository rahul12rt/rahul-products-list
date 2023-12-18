import React from 'react'

function Button({handleChange}) {
  return (
    <button onClick={() => handleChange(id)}>Remove</button>
  )
}

export default Button