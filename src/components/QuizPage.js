import React from 'react';
import data from "./data";
import QuizQuestion from './QuizQuestion';
import Confetti from 'react-confetti';

export default function QuizPage(props){
  const [correctAswerCounter, setCorrectAswerCounter] = React.useState(0)
  const [answeredQuestions, setAnsweredQuestions] = React.useState({})
  const [checkAnswersIsClicked, setCheckAnswersIsClicked] = React.useState(false)

  // fetching api here
  const [quiz, setQuiz] = React.useState(()=> data)

  // If you want to cheat answers uncomment next line 😉
  // console.log(quiz.results.map(e => e.correct_answer))

  function generateQuestions(){
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(APIdata => setQuiz(APIdata))
    .catch((err) => {
      console.log(err.message);});
  }

  React.useEffect(()=>{
    if(!checkAnswersIsClicked){
      generateQuestions()
    }
  },[checkAnswersIsClicked])
  // End of fetching api

  const QuizQuestions = quiz.results.map((e,i) => (<QuizQuestion 
    key={i}
    quiz = {quiz}
    questionNum={i}
    question={e.question}
    incorrectAnswers = {e.incorrect_answers}
    correctAnswer = {e.correct_answer}
    setAnsweredQuestions = {setAnsweredQuestions}
    checkAnswersIsClicked = {checkAnswersIsClicked}
  />))


  function checkAnswers(){
    let x=0;
    for(const property in answeredQuestions){
      if(answeredQuestions[property]){
        ++x;
      }
    }
    setCorrectAswerCounter(x)
    setCheckAnswersIsClicked(prev => !prev);
  }

  // resetting states for the new quiz
  function PlayAgainBtn(){
    setCorrectAswerCounter(0)
    setCheckAnswersIsClicked(prev => !prev);
  }
  return (
    <div className='quiz-page'>
      {correctAswerCounter>= (quiz.results.length)/2 && <Confetti />}
      {QuizQuestions}
      <div className='checkAnswer-box'>
        <p className='scoreMsg' style={{display:checkAnswersIsClicked?'block':'none'}}>{`You scored ${correctAswerCounter}/${quiz.results.length} correct answers`}</p>
        <button className='check-answers' style={{display: checkAnswersIsClicked?'none':'inline-block'}} onClick={(event => checkAnswers(event))}>Check answers</button>
        <button className='check-answers' style={{display: !checkAnswersIsClicked?'none':'inline-block'}} onClick={(event => PlayAgainBtn(event))}>Play again</button>
      </div>
    </div>
  )
}