import React from 'react'

const Statistics = ({stats}) => {
    const all = stats.good + stats.neutral + stats.bad
    let average=0, positive=0
    if (all > 0) {
        average = (stats.good - stats.bad)/all
        positive = (stats.good * 100 / all)
    }  
    return (
        <>
            <p>good {stats.good}</p>
            <p>neutral {stats.neutral}</p>
            <p>bad {stats.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </>
    )
}

export default Statistics
