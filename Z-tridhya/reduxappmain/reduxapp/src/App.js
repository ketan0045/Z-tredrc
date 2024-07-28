import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, bgAlive, bgWhite, decNumber, devideNumber, incNumber, login, logout, multNumber, removeCart } from './actions';
import { useState } from 'react';
import { add, subtract, multiply, divide, clear } from './actions';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const myOneState = useSelector((state) => state.changeNumber);
  const myTwoState = useSelector((state) => state.multiplyAction);
  const colorState = useSelector((state) => state.bgExample.changeBg);
  const cartShowItem = useSelector((state) => state.cardReducer.inCartItem);
  const user = useSelector((state) => state.isLogged.isLoggedUser);
  // calculator state
  const result = useSelector((state) => state.calculatorReducer.result);
  console.log(result)

  const handleOperation = (operation) => {
    if (input !== '') {
      dispatch(operation(parseFloat(input)));
      setInput('');
    }
  };

  const handleClear = () => {
    dispatch(clear());
    setInput('');
  };



  return (
    <>

      <div className='main-div' style={{ backgroundColor: colorState, padding: '20px' }}>
        <span className='card-count'>{cartShowItem.length}</span>
        <h3>Inc/dec</h3>
        <div className="App" style={{ display: "flex" }}>
          <button onClick={() => dispatch(decNumber())}>-</button>
          <p>{myOneState}</p>
          <button onClick={() => dispatch(incNumber(5))}>+</button>
        </div>

        <h3>mult/devide</h3>
        <div className="App" style={{ display: "flex" }}>
          <button onClick={() => dispatch(devideNumber())}>/</button>
          <p>{myTwoState}</p>
          <button onClick={() => dispatch(multNumber(5))}>*</button>
        </div>

        <h3>Bgchangers</h3>
        <div className="App" style={{ display: "flex" }}>
          <button onClick={() => dispatch(bgAlive("aliceblue"))}>ALICE</button>
          <p>{colorState} </p>
          <button onClick={() => dispatch(bgWhite("white"))}>WHITE</button>
        </div>


        <div className='cart-main'>
          <button onClick={() => dispatch(removeCart())}>Remove cart</button>
          <span>{cartShowItem.length}</span>
          <button onClick={() => dispatch(addCart({ item: "phone", price: "3000" }))}>Add cart</button>
        </div>


        {user ? <div><h4>Welcome {user}</h4><button onClick={() => dispatch(logout())}>logout</button></div>
          : <div><p>Please log in</p><button onClick={() => dispatch(login('vivek'))}>login</button></div>}
      </div>

      <div>
        <h1>Calculator</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
        <br />
        <button onClick={() => handleOperation(add)}>Add</button>
        <button onClick={() => handleOperation(subtract)}>Subtract</button>
        <button onClick={() => handleOperation(multiply)}>Multiply</button>
        <button onClick={() => handleOperation(divide)}>Divide</button>
        <br />
        <button onClick={handleClear}>Clear</button>
        <br />
        <p>Result: {result}</p>
      </div>
    </>
  );
}

export default App;



















