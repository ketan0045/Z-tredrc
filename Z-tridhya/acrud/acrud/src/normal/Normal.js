import React, { useState } from 'react';

const Normal = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [dataSubmit, setDataSubmit] = useState([]);
    
    const [toggle, setToggle] = useState(false);
    const [updateId, setUpdateId] = useState("");

    const handleOnchange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (toggle) {
          const tempTableData = dataSubmit;
          Object.assign(tempTableData[updateId],formData);
          setDataSubmit([...tempTableData]);
          setToggle(false);
          setFormData({
            name: "",
            email: "",
        });
        } else {
            setDataSubmit([...dataSubmit, formData]);
            setFormData({
                name: "",
                email: "",
            });   
        }
    }

    const handleDelete = (index) => {
        const filterData = dataSubmit.filter((item, id) => index !== id)
        setDataSubmit(filterData);
    }
    
    const handleEdit = (index) => {
        const updateData = dataSubmit[index];
        const name = updateData.name
        const email = updateData.email

        setFormData({ name, email });
        setToggle(true);
        setUpdateId(index);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' name='name' value={formData.name} onChange={handleOnchange} /><br />
                <label>email</label><br />
                <input type='text' name='email' value={formData.email} onChange={handleOnchange} /><br /><br />
                <button type='submit'>{toggle ? "Update" : "Add"}</button>
            </form>

            <table>
                <thead>
                    <tr className="header-row">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSubmit.map((item, index) => {
                        return (
                            <tr className="header-row" key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>edit</button>
                                    <button onClick={() => handleDelete(index)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Normal
