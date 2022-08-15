import React from 'react';

export default function QuizQuestion({quiz,questionNum,question,correctAnswer,incorrectAnswers,setAnsweredQuestions,checkAnswersIsClicked}){
  const [clicked, setClicked] = React.useState({
    choosed: ''
  });

  const [choices, setChoices] = React.useState([]);
  
  function btnClicked(event){
    setClicked({
      choosed: event.currentTarget.textContent
    })
    for(let e of event.currentTarget.parentElement.children){
      e.classList.remove('clicked')
    }
    event.currentTarget.classList.add('clicked')
  }

  React.useEffect(()=>{
    if( clicked.choosed === correctAnswer ) {
      setAnsweredQuestions(prev => ({
        ...prev,
        [`Q${questionNum}`]: true
      }))
    } else {
      setAnsweredQuestions(prev => ({
        ...prev,
        [`Q${questionNum}`]: false
      }))
    }
  },[clicked])

  React.useEffect(()=>{
    const array = [...incorrectAnswers];
    const rand = Math.floor(Math.random()*array.length);
    array.splice(rand,0, correctAnswer)
    setChoices(array)
    
  },[quiz])

  // When check answers clicked we change the choices colors
  function changeChoicesColors(){
    if(checkAnswersIsClicked){
      for(let e of document.querySelectorAll('.choices')[questionNum].children){
        e.className = '';
        if(e.textContent === correctAnswer){
          e.classList.add('right')
        } else if(e.textContent === clicked.choosed) {
          e.classList.add('wrong')
        } else if(e.textContent !== clicked.choosed)
          e.classList.add('notChoosed')
      }
    } else{
      for(let e of document.querySelectorAll('.choices')[questionNum].children){
        e.className = '';
      }
    }
  }

  React.useEffect(()=>{
    changeChoicesColors();
  },[checkAnswersIsClicked])
  
  return (
    <div className='quiz-question'>
      <p className='question'>{question}</p>
      <div className='choices'>
        <button 
        onClick={btnClicked}
        >{choices[0]}</button>

        <button 
        onClick={btnClicked}
        >{choices[1]}</button>

        <button 
        onClick={btnClicked}
        >{choices[2]}</button>

        <button 
        onClick={btnClicked}
        >{choices[3]}</button>

      </div>
      <hr className='quiz-question-hr'/>
    </div>
  )
}