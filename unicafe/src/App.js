import { useState } from 'react'

const StatisticsLine = ({ text, value }) => { return (<p>{text} {value}</p>) }

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <StatisticsLine text={"Good"} value={good} />
        <StatisticsLine text={"Neutral"} value={neutral} />
        <StatisticsLine text={"Bad"} value={bad} />
        <StatisticsLine text={"Average"} value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text={"Positive"} value={good / (good + neutral + bad) * 100 + "%"} />
      </div>
    )
  }
  else { return (<div>No feedback given.</div>) }
}

const Button = ({ handleClick, text }) => { return (<button onClick={handleClick}>{text}</button>) }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App