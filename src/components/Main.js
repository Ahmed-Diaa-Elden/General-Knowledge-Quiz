import React from 'react';
// import './scss/style.scss';
import yellowCircle from '../images/yellow-circle.svg';
import blueCircle from '../images/blue-circle.svg';
import FirstPage from './FirstPage';
import QuizPage from './QuizPage';

export default function Main(props){
  const [firstPageState, setFirstPageState] = React.useState(true);
  
  function showFirstPage(){
    setFirstPageState(prev => !prev)
  }

  return (
    <main className='main'>
      <img src={yellowCircle} className='main--yellow-circle' alt='yellow-circle'/>
      {firstPageState? <FirstPage  onClick={showFirstPage}/>: <QuizPage />}
      <img src={blueCircle} className='main--blue-circle' alt='blue-circle'/>
    </main>
  )
}
