import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {

    const deleteData = (e) => {
        e.preventDefault()
        props.deleteRoeData(props.id)
    }

    return (
        <div className='card'>
            <div className='main-first'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            <div className='main-first'>
                <button className='delete' onClick={deleteData}><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default Notes
