import React, {useState} from 'react'
import './App.css'
import { questionsList } from './data.js'
import Card from './components/Card'

const App = () => {
  // index is at 0
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [flipped, setFlipped] = useState(false);
  let question = questionsList[currentQuestion];

  function handlePreviousClick(){
    if(currentQuestion == 0){
      setCurrentQuestion(9);
      setFlipped(false);
    }
    else{
      setCurrentQuestion(currentQuestion-1);
      setFlipped(false);
    }
  }

  function handleNextClick() {
    if(currentQuestion == 9){
      setCurrentQuestion(0);
      setFlipped(false);
    }
    else{
      setCurrentQuestion(currentQuestion + 1);
      setFlipped(false);
    }
    
  }

  function randomQuestion(){
    let random =Math.floor(Math.random() * 10);
    setCurrentQuestion(random);
    setFlipped(false);
  }


  return(
    <div className = "home">
      <h1>The Sports Quiz</h1>
      <h2>How well do you know common sports facts?</h2>
      <h3>Question {currentQuestion + 1}  / 10 </h3>
      <Card 
      question = {questionsList[currentQuestion].question} 
      answer = {questionsList[currentQuestion].answer}
      flipped = {flipped}
      setFlipped = {setFlipped} /> 
      <div className = "buttons">
      <button onClick = {handlePreviousClick}>Previous</button>
      <button onClick = {randomQuestion}>Random</button>
      <button onClick = {handleNextClick}>Next</button>
      </div>

    </div>
  )
}

export default App;
