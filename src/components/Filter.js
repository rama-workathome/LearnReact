import React from 'react'

const Filter = (props) => {
    return (
      <p>Showing values containing  <input value={props.v} onChange={e=>props.c(e.target.value)} /></p>
    )
  }

export default Filter
