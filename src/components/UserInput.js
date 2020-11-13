import React from 'react'

export default function UserInput(props) {
  const inputStyle = {
    padding: '1rem 2rem',
    fontSize: '2rem',
    minWidth: '50%',
    margin: '2rem auto',
  }

  return (
    <div>
      <h2>User Input</h2>
      <input type="text" 
        style={inputStyle} 
        onChange={props.onChange} 
        value={props.currentName}
      /> 
    </div>
    
  )
}
