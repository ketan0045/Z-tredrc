

import React, { useReducer } from 'react';

const initialState = { isAuthenticated: false };

const Reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {  isAuthenticated: true };
    case 'logout':
      return { isAuthenticated: false };
    default:
      return state;
  }
};

const UseReducers2 = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      {state.isAuthenticated ? (
        <p>Welcome, User! <button onClick={() => dispatch({ type: 'logout' })}>Logout</button></p>
      ) : (
        <p>Please login <button onClick={() => dispatch({ type: 'login' })}>Login</button></p>
      )}
    </div>
  );
};

export default UseReducers2;
