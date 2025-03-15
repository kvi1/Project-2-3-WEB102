import React, { useState } from 'react';
import './App.css';
import { questionsList } from './data.js';
import Card from './components/Card';

const App = () => {
  // index is at 0
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(null); 
  const [streak, setStreak] = useState(0);
  const [last, setLast] = useState(null);
  const [last2, setLast2] = useState(null);


  let question = questionsList[currentQuestion];

  function handlePreviousClick() {
    if(currentQuestion === 0){
      setCurrentQuestion(9)
      setLast(true);
    }
    else{
      setCurrentQuestion(currentQuestion - 1)
      setLast(null);
    }
    setFlipped(false);
    setGuess("");
    setCorrect(null); 
  }

  function handleNextClick() {
    if(currentQuestion == 9){
      setCurrentQuestion(0);
      setLast2(true);
    }
    else{
      setCurrentQuestion(currentQuestion + 1);
      setLast2(null);
    }
    setFlipped(false);
    setGuess("");
    setCorrect(null);
  }

  function randomQuestion() {
    let random = Math.floor(Math.random() * 10);
    setCurrentQuestion(random);
    setFlipped(false);
    setGuess("");
    setCorrect(null);
  }

  function handleGuessSubmit() {
    let c = null;
    if (guess.trim().toLowerCase() === question.answer.toLowerCase()) {
      setCorrect(true);
      c = true;
    } else {
      setCorrect(false);
      c = false;
    }

    if(c == true){
      setStreak(streak + 1);
    }
    else{
      setStreak(0);
    }
  }

 

  return (
    <div className="home">
      <h1>The Sports Quiz</h1>
      <h2>How well do you know common sports facts?</h2>
      <h3>Question {currentQuestion + 1} / 10</h3>
      <h4>Current Streak: {streak}</h4>

      <Card
        question={questionsList[currentQuestion].question}
        answer={questionsList[currentQuestion].answer}
        flipped={flipped}
        setFlipped={setFlipped}
      />

      <div className = "guessing">
      <p>Your Guess</p>
      <input
        type="text"
        placeholder="Answer"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className={`guess ${correct === true ? 'correct' : correct === false ? 'incorrect' : ''}`}
      />
      <button onClick={handleGuessSubmit}>Submit</button>
      </div>

      <div className="buttons">
        <button onClick={handlePreviousClick} 

        disabled = {currentQuestion === 0}
        style = {{backgroundColor: currentQuestion === 0 ? "gray" : "black", color: "white"}}
        >Previous</button>
        <button onClick={randomQuestion}>Shuffle Cards</button>
        <button onClick={handleNextClick}
        disabled = {currentQuestion === 9}
        style = {{backgroundColor: currentQuestion === 9 ? "gray" : "black"}}
        

        >Next</button>
      </div>
    </div>
  );
};

export default App;
