import React from 'react'
import StatDisplay from './StatDisplay'

const Statistics = ({stats}) => {
    const all = stats.good + stats.neutral + stats.bad
    let average=0, positive=0
    if (all > 0) {
        average = ((stats.good - stats.bad)/all).toFixed(1)        
        positive = (stats.good * 100 / all).toFixed(1)
        return (
            <table>
                <tbody>
                    <StatDisplay label="good" value={stats.good} />
                    <StatDisplay label="neutral" value={stats.neutral} />
                    <StatDisplay label="bad" value={stats.bad} />
                    <StatDisplay label="all" value={all} />
                    <StatDisplay label="average" value={average} />
                    <StatDisplay label="positive" value={positive + "%"} />
                </tbody>
            </table>
        )
    }  else {
        return (
            <p>No feedback given</p>
        )
    }
    
}

export default Statistics
