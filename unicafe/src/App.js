import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Average {(good - bad) / (good + neutral + bad)}</p>
      <p>Positive {good / (good + neutral + bad)}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}> Good </button>
      <button onClick={() => setNeutral(neutral + 1)}> Neutral </button>
      <button onClick={() => setBad(bad + 1)}> Bad </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App