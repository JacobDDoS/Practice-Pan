import React from 'react'
import { PieceComponent } from './PieceComponent'
export const ContentComponent = ({content, input=null, setInput=null}) => {
  return (
    <div>
        {
            content.pieces.map((piece, idx) => {
                return <PieceComponent piece={piece} input={input} setInput={setInput} key={`piece-${idx}-${piece.value}`}/>
            })
        }
    </div>
  )
}
