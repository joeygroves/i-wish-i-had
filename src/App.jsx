import { useState } from 'react'
import './App.css'


function App() {
  const wish = [
    "loved more",
    "the courage to just be myself",
    "spent more time with the people I love",
    "made spirituality more of a priority",
    "not spent so much time working",
    "discovered my purpose earlier",
    "learned to express my feelings more",
    "not spent so much time worrying about things that never happened",
    "taken more risks",
    "cared less about what other people tought",
    "realised earlier that happiness is a choice",
    "taken better care of myself",
    "been a better spouse",
    "paid less attention to other people's expectations",
    "quit my job and found something I really enjoyed doing",
    "stayed in touch with old friends",
    "spoken my mind more",
    "not spent so much time chasing the wrong things",
    "more children",
    "touched more lives",
    "thought about life's big questions earlier",
    "traveled more"
  ];

  const [selected, setSelected] = useState(0);

  const pickRandom = () => {
    while (true) {
      const possibleNext = Math.floor(Math.random() * wish.length)
      if (possibleNext !== selected) {
        return possibleNext
      }
    }
  }

  return (
    <div onClick={() => setSelected(pickRandom)}>
      <p>I wish I had {wish[selected]}</p>
    </div>
  )
}

export default App
