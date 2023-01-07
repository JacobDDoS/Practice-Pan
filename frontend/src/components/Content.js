import React from 'react'
import { MultipleChoiceQuestion } from './Questions/MultipleChoiceQuestion';

export const Content = ({content}) => {
  console.log(content);
  return (
    <div>
        {
            content.pieces.map((piece) => {
                console.log(piece);
                const type = piece.type;
                if (type === 'p') {
                    return <p>{piece.value}</p>
                } else if (type === 'MultipleChoice') {
                    return null
                }
            })
        }
    </div>
  )
}
