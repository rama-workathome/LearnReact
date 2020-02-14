import React from 'react'

const Statistics = ({stats}) => {
    return (
        <>
            <p>good {stats.good}</p>
            <p>neutral {stats.neutral}</p>
            <p>bad {stats.bad}</p>
        </>
    )
}

export default Statistics
