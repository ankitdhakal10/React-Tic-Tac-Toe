import React from 'react'

function Squares(props) {
  return (
    <button onClick={props.onClick} className='square'>{props.value}</button>
  )
}

export default Squares