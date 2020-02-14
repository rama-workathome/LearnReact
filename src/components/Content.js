import React from 'react'
import Part from './Part'

const Content = (props) => {

    return (
        <>
           <Part name={props.part1} exercises={props.exercise1} />
           <Part name={props.part2} exercises={props.exercise2} />
           <Part name={props.part3} exercises={props.exercise3} />
        </>
    )
}

export default Content
