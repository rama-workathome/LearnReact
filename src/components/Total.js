import React from 'react'

const Total = ({total}) => <p><b>total of {total.reduce((a,b)=>a+b.exercises,0)} exercises</b></p>

export default Total
