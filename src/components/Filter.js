import React from 'react'

const Filter = (props) => <p>Showing values containing  <input value={props.v} onChange={e=>props.c(e)} /></p>

export default Filter
