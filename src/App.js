import React, {useState} from 'react';
import Button from './components/Button';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handler={()=>nextAnecdote()} label="next anecdote" />
    </div>
  )
}

export default App;
