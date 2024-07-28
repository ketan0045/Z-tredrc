import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Readmock = () => {
  const [data, setData] = useState([])
  const [tabledark, setTabledark] = useState("");
  
  const diveData = () => {
    axios.get("https://655dc6669f1e1093c599d69f.mockapi.io/react-crud").then((reponse) => {
      console.log(reponse.data);
      setData(reponse.data);
    })
  }

  useEffect(() => {
    diveData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://655dc6669f1e1093c599d69f.mockapi.io/react-crud/${id}`).then(() => {
      diveData();
    })
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
            if(tabledark === "table-dark"){
              setTabledark("")
            }else{
              setTabledark("table-dark")
            }
          }}/>
        </div>

        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/updatemock">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  )
}

export default Readmock


