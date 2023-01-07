import React from 'react'
import { PieceComponent } from '../PieceComponent';

export const MultipleChoice = ({data, handleInput}) => {
  return (
    <div className='grid'>
        {
            data.possibleAnswers.map((answerChoice, idx) => {
                return <button className='mult-btn' onClick={()=>handleInput(answerChoice)} key={`button-${idx}-${answerChoice.value}`}>
                    <PieceComponent piece={answerChoice}/>
                </button>
            })
        }
    </div>
  )
}
