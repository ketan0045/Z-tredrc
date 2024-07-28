import React, { useState } from 'react'

const FormBasicLogins = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allentry, setAllEntry] = useState([]);

  const formDataSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password }
      setAllEntry([...allentry, newEntry]);
      console.log(allentry, "array-state-allentry ")
      console.log(newEntry, "array-state-newEntry ")

      setEmail("");
      setPassword("");

    } else {
      alert("plz fill data")
    }
  }

  return (
    <>
      <form onSubmit={formDataSubmit}>
        <div className='email-input'>
          <label>email :</label>
          <input type='text' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='password-input'>
          <label>password :</label>
          <input type='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button >Login</button>
      </form>

      {allentry.map((datas) => {
        const { id, email, password } = datas;
        return (
          <div key={id}>
            <h3>{email}</h3>
            <h3>{password}</h3>
          </div>
        )
      })}
    </>
  )
}

export default FormBasicLogins;






