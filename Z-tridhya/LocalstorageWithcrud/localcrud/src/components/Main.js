import React, { useState, useEffect } from 'react';

const getToLocal = () => {
    const list = localStorage.getItem("list");
    // console.log(list, "localStorage");
    if (list) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return []
    }
}

const Main = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getToLocal());

    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditIrem, setIsEditIrem] = useState(null);


    const addItem = () => {
        if (!inputData) {
            alert("fill data"); 
        } else if (inputData && !toggleSubmit) {
            // setItems(
            //     items.map((elem) => {
            //         if (elem.id === isEditIrem) {
            //             return { ...elem, name: inputData }
            //         }
            //         return elem;
            //     }); 
            // );

            const SeeData = items.map((elem) => {
                if (elem.id === isEditIrem) {
                    return { ...elem, name: inputData }
                }
                return elem;
            });
            setItems(SeeData);

            setToggleSubmit(true);

            setInputData("");

            setIsEditIrem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData("");
        }
    }

    const deleteData = (index) => {
        const updataData = items.filter((data) => {
            return index !== data.id
        });
        setItems(updataData);
    }


    const editData = (id) => {
        const newEditItem = items.find((ele) => {
            return ele.id === id
        });
        console.log(newEditItem, "newEditItem...id");

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditIrem(id);
        console.log(id, "setIsEditIrem id ni niche");
        // setIsEditIrem(id) or ele.id pn chale aa store maate pachu tya moklva
    }

    const allDelete = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(items))
    }, [items]);


    return (
        <>
            <div className='main'>
                <div className='primary-div-one'>
                    <input type='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />&nbsp;

                    {toggleSubmit ? <button onClick={addItem} title='add'>+</button> :
                        <i className="fa fa-pencil" aria-hidden="true" onClick={addItem} title='update'></i>}

                    <div className='primary-div-two'>
                        {items.map((curr) => {
                            return (
                                <div className='Mapping' key={curr.id}>
                                    <p>{curr.name}</p>
                                    <div className='btn'>
                                        <i className="fa fa-pencil" aria-hidden="true" onClick={() => editData(curr.id)} title='edit'></i>&nbsp;&nbsp;
                                        <i className="fa fa-trash" aria-hidden="true" onClick={() => deleteData(curr.id)} title='delete'></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                {items.length >= 1 &&
                    <div className='delete-all'>
                        <button onClick={allDelete}>Delete All</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Main











