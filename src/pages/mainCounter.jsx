import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from '../component/counter'


function MainCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())} className='bg-blue-300 p-2 mr-8 cursor-pointer rounded-[4px] ring-2 ring-blue-600 ring-offset-2 mx-8'>Increment</button>
        <button onClick={() => dispatch(decrement())} className='bg-blue-300 p-2 mr-8 cursor-pointer rounded-[4px] ring-2 ring-blue-600 ring-offset-2'>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))} className='bg-blue-300 p-2 mr-8 cursor-pointer rounded-[4px] ring-2 ring-blue-600 ring-offset-2'>Increment by 10</button>
        <button onClick={() => dispatch(incrementAsync())} className='bg-blue-300 p-2 mr-8 cursor-pointer rounded-[4px] ring-2 ring-blue-600 ring-offset-2'>Increment by some delay</button>
      </div>
    </div>
  )
}

export default MainCounter