import React from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckbox, removeTodo } from '../redux/todoapp/action';

const Todos = ({ editFormVisibility, handleEditClick }) => {
    const todos = useSelector((state) => state.operationsReducer);
    const dispatch = useDispatch();

    return (
        <>
            {todos.map((todo) => {
                console.log(todo,"todotodotodo")
                return (
                    <div className='todo-box' key={todo.id}>
                        <div className='content'>
                            {editFormVisibility === false && (
                                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))}></input>
                            )}

                            <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                                {todo.todo}
                            </p>
                        </div>
                        <div className='actions-box'>
                            {editFormVisibility === false && (
                                <>
                                    <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
                                    <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                                </>
                            )}
                        </div>
                    </div>

                )
            })}
        </>
    )
}

export default Todos









