import React, { useState } from 'react'

const CreateNote = (props) => {

    const [data, setData] = useState({
        title:"",
        content:""
    });
    const [expand, setExpand] = useState(false)

    const onData = (e) => {
        const { name, value } = e.target;
        setData((oldData) => {
            return { ...oldData, [name]: value }
        });
    }

    const formDatasubmit = (e) => {
        e.preventDefault();    
        props.dataSend(data);
        setData( {title:"", content:""});
    }
    const exPandArea=()=>{
        setExpand(true)
    }
   
    return (
        <form onSubmit={formDatasubmit}>
            <div className='creatediv'>
          {expand ? <>  <div className='input-field'>
                <input placeholder='Title' className='input' name='title' value={data.title} onChange={onData} />
            </div><br /></> :null}
                <div className='text-area'>
                    <textarea placeholder='Write Note Here' className='text' name='content' value={data.content} onChange={onData} onClick={exPandArea} />
                </div>
            </div>
            <button className='CreateNote-btn' type='submit' >+</button>
        </form>
    )
}

export default CreateNote;
