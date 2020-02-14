import React, {useState} from 'react';
import Button from './components/Button';
import Header from './components/Header';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const maxVote=votes.indexOf(Math.max(...votes))

  const nextAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const addVotes = (value) => {
    const localVotes = [...votes]
    localVotes[value]++
    setVotes(localVotes)
  }
  
  return (
    <div>
      <Header title="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <Button handler={()=>addVotes(selected)} label="vote" />
      <Button handler={()=>nextAnecdote()} label="next anecdote" />
      <Header title="Anecdote with the most votes" />
      <p>{anecdotes[maxVote]}</p>
      <p>has {votes[maxVote]} votes</p>
    </div>
  )
}

export default App;
