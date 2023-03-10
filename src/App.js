import React from 'react'
import "./App.css"
import {useSelector , useDispatch} from 'react-redux'
import {incNum, decNum} from './actions/index'
const App = () => {
  const mystate = useSelector((state) => state.changeTheNum);
  const dispatch = useDispatch();
  return (
    <div className="container">
       <h1>Increment and Decrement counter</h1>
       <h4>Using React and Redux</h4>

       <div className="quantity">
        <a onClick={() => dispatch(decNum())} className="quanitity__minus" title="Decrement"><span>-</span></a>
        <input type="text" name="quantity" className="quantity__input" value= {mystate} />
        <a onClick={() => dispatch(incNum())} className="quanitity__plus" title="Increment"><span>+</span></a>
       </div>
    </div>
  )
}

export default App

