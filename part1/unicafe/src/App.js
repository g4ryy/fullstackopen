import { useState } from 'react'
import Button from './components/Button'
import Statistic from './components/Statistic'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button label='good' onClick={() => setGood(good + 1)}/>
      <Button label='neutral' onClick={() => setNeutral(neutral + 1)}/>
      <Button label='bad' onClick={() => setBad(bad + 1)}/>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App