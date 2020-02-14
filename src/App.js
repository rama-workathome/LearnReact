import React, {useState} from 'react';
import Button from './components/Button';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const addVotes = (value) => {
    const localVotes = [...votes]
    localVotes[value]++
    setVotes(localVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <Button handler={()=>addVotes(selected)} label="vote" />
      <Button handler={()=>nextAnecdote()} label="next anecdote" />
    </div>
  )
}

export default App;
