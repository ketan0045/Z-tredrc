// import React, { useState } from 'react'

// const Formexplain = () => {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");

//     const FormSubmit = (e) => {
//         e.preventDefault()
//         console.log(name, "name", password, "password")
//     }

//     return (
//         <form onSubmit={FormSubmit}>
//             <h3>Hello {name} {password}</h3>
//             <input type='text' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
//             <br />
//             <input type='text' placeholder='Enter your   password' value={password} onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default Formexplain  

import React, { useState } from 'react'

const Formexplain = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        pass: "",
        quaf: "",
        gender: "",
        cast: "",
    })
    const { name, email, pass, quaf, gender,cast } = data;

    const [saveData, setSaveData] = useState([])
    const dataChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
   const newData = {
    name,
    email,
    pass,
    quaf,
    gender,
    cast
   }
       
    // setSaveData({...saveData,newData})
    setSaveData([...saveData,newData])
    }
    return (
        <>
            <form onSubmit={FormSubmit}>
                <h3>Hello 1.{name} 2.{email} 3.{pass} 4.{quaf} 5.{gender}</h3>
                <input type='text' placeholder='Enter your Name' value={name} name='name' onChange={dataChange} />
                <br />
                <input type='text' placeholder='Enter your email' value={email} name='email' onChange={dataChange} />
                <br />
                <input type='number' placeholder='Enter your pass' value={pass} name='pass' onChange={dataChange} />
                <br />
                <input type='text' placeholder='Enter your quaf' value={quaf} name='quaf' onChange={dataChange} />
                <br />
                <input type='text' placeholder='Enter your gender' value={gender} name='gender' onChange={dataChange} />
                <br />
                <input type='text' placeholder='Enter your cast' value={cast} name='cast' onChange={dataChange} />
                <br />
                <button type='submit'>Submit</button>
            </form>


            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>pass</th>
                        <th>quaf</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody> 
                    {saveData.map((currentdata,index) => {
                        return (
                            <div key={index}>
                                <tr >
                                    <td>{currentdata.name}</td>
                                    <td>{currentdata.email}</td>
                                    <td>{currentdata.pass}</td>
                                    <td>{currentdata.quaf}</td>
                                    <td>{currentdata.gender}</td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Formexplain

