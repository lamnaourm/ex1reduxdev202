import React from 'react'
import { useDispatch } from 'react-redux'

export default function Buttons() {

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch({type:'INCREMENT', payload:4})}>Incrementer</button>
        <button onClick={() => dispatch({type:'DECREMENT', payload:3})}>decrementer</button>
        <button onClick={() => dispatch({type:'INIT', payload:0})}>Initialiser</button>
    </div>
  )
}
