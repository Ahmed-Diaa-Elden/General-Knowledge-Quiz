import React from 'react';

export default function FirstPage(props){
  return (
    <div className='firstPage'>
        <h2>Quiz</h2>
        <p>Test your general knowledge</p>
        <button type='button' onClick={props.onClick}>Start quiz</button>
    </div>
  )
}