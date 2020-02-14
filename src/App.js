import React, {useState} from 'react';
import Button from './components/Button'
import Header from './components/Header'
import Statistics from './components/Statistics'

const App = () => {
  const [feedback, setFeedback] = useState({good: 0, neutral:0, bad: 0})

const giveFeedback = (value) => {
  const localValue = { ...feedback }
  switch (value) {
    case 'good':
      localValue.good++
      break
    case 'bad':
      localValue.bad++
      break
    case 'neutral':
      localValue.neutral++
      break
    default:
      break
  }
  setFeedback(localValue)
}
  return (
    <div>
      <Header title="give feedback" />
      <Button handler={()=>giveFeedback('good')} label="good" />
      <Button handler={()=>giveFeedback('neutral')} label="neutral" />
      <Button handler={()=>giveFeedback('bad')} label="bad" />
      <Header title="statistics" />
      <Statistics stats={feedback} />
    </div>
  )
}


export default App;
