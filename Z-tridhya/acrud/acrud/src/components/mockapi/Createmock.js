import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";

const Createmock = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const handlePostData = (e) => {
        e.preventDefault();
        axios.post("https://655dc6669f1e1093c599d69f.mockapi.io/react-crud", {
            name: name,
            email: email,
        }).then(() => {
            history("/readmock");
        })
    }

    return (
        < >
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handlePostData}>Submit</button>
            </form>
        </>
    )
}

export default Createmock
