import React from 'react'

const Total = ({total}) => <p>Number of exercises {total.reduce((a,b)=>a+b.exercises,0)}</p>

export default Total
