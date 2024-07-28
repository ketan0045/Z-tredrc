import React, { useState, useEffect } from 'react';

const getLocalData = () => {
    const list = localStorage.getItem("datalist");
    console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem("datalist"));
    } else {
        return []
    }
}

const Example = () => {

    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState(getLocalData());

    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem,setIsEditItem] = useState(null);

    const addData = () => {
        if (!inputData) {
            alert("fill the Data");
        } else if(inputData && !toggleSubmit){
            console.log(isEditItem,"isEditItem")
            const updateData= item.map((ele)=>{
                if(ele.id === isEditItem){
                    return {...ele,name:inputData}
                }
                return ele;          
            });
            setItem(updateData);

            setInputData("");

            setToggleSubmit(true);

            setIsEditItem(null);

        }
        else {
            let allData = { id: new Date().getTime().toString(), name: inputData }
            setItem([...item, allData]);
            setInputData("");
        }
    }


    const deleteData = (id) => {
        const newItems = item.filter((elem) => {
            return id !== elem.id
        });
        setItem(newItems);
    }

    const allDataDelete = () => {
        setItem([]);
    }

    useEffect(() => {
        localStorage.setItem("datalist", JSON.stringify(item));
    }, [item]);

    const editData = (id) => {
        const newClickid = item.find((ele) => {
            return ele.id === id
        });
        console.log(newClickid,"newClickid edit id");

        setToggleSubmit(false);

        setInputData(newClickid.name);

        setIsEditItem(id);
        // setIsEditItem(id) aa athva biji
    }   

    return (
        <div className='example-main'>
            <div className='example-one'>
                <h4>Data list Here</h4>
                <input type='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />&nbsp;
                {toggleSubmit ? <button title='add item' onClick={addData}>+</button> :
                    <i className="fa fa-pencil-square" aria-hidden="true" title='update item' onClick={addData}></i>}

            </div>
            <div className='example-two-data'>
                {item.map((elem) => {
                    return (
                        <div className='allData' key={elem.id}>
                            <p>{elem.name}</p>
                            <div className='example-button'>
                                <i className="fa fa-pencil-square" aria-hidden="true" title='edit item' onClick={() => editData(elem.id)}></i>&nbsp;
                                <i className="fa fa-trash" aria-hidden="true" title='delete item' onClick={() => deleteData(elem.id)}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='deleteAll'>
                <button onClick={allDataDelete}>Delete All</button>
            </div>
        </div>
    )
}

export default Example









           


