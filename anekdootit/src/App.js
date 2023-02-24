import { useState } from 'react'

const DisplayAnecdote = ({ anec, votes }) => {
  return (
    <div>
      <p>{anec}</p>
      <p>Has {votes} votes.</p>
    </div>
  )
}

const HighestAnecdote = ({ votes, anecdotes }) => {
  var highIndex = 0
  var highestVotes = 0
  for (var i = 0; i < votes.length; i++) {
    if (votes[i] > highestVotes) {
      highIndex = i
      highestVotes = votes[i]
    }
  }
  return (<DisplayAnecdote anec={anecdotes[highIndex]} votes={highestVotes} />)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const updateVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1> Anecdote of the day.</h1>
      <DisplayAnecdote anec={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => updateVotes()}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next anecdote</button>
      <h2> Anecdote with most votes.</h2>
      <HighestAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App