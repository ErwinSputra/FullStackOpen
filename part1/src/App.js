import { useState } from "react";

const anecdotes = ['If it hurts, do it more often.',
'Adding manpower to a late software project makes it later!',
'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
'The only way to go fast, is to go well.',
'The best way to get a project done faster is to start sooner',
'Even the best planning is not so omniscient as to get it right the first time.']

const n = 10
const anecdoteVotes = Array(n).fill(0)

const App = () => {

  const [selectedAnecdote, setSelectedAnecdote] = useState("If it hurts, do it more often.")
  const [vote, setVote] = useState(0)
  const [randomNumber, setRandomNumber] = useState(0)
  const [topAnecdote, setTopAnecdote] = useState("-")
  const [topVote, setTopVote] = useState(0)

  const handleNext = () => {
    let number 
    do {
      number = Math.floor(Math.random() * 10)
    } while (randomNumber === number);
    setRandomNumber(number)
    setSelectedAnecdote(anecdotes[number])
    setVote(anecdoteVotes[number])
  }

  const handleVote = () => {
    anecdoteVotes[randomNumber] += 1
    const top = Math.max(...anecdoteVotes)
    const index = anecdoteVotes.indexOf(top)

    setVote(anecdoteVotes[randomNumber])
    setTopVote(top)
    setTopAnecdote(anecdotes[index])
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{selectedAnecdote}</p>
      <p>has {vote} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdotes with most votes</h1>
      <p>{topAnecdote}</p>
      <p>has {topVote} votes</p>
    </div>
  );
}

export default App;
