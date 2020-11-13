import React from 'react'

export default function UserOutput(props) {
  const style={
    border: '1px solid #333',
    width: '50%',
    margin: '2rem auto'
  }

  return (
    <div style={style}>
      <h2>{props.userName}</h2>
      <p>**USERNAME**</p>
      <p>**PASSWORD**</p>
    </div>
  )
}
