
import './App.css';
import { useState } from "react"

function App() {
  const [inputdata, setInputdata] = useState("");
  const [newentry, setNewentry] = useState([]);

  const dataChange = (e) => {
    setInputdata(e.target.value)
  }

  const Alldatasubmit = () => {
    setNewentry((oldvalue) => {
      return [...oldvalue, inputdata]
    });
    setInputdata("")
  }

  const dataDelete = (id) => {
    setNewentry((oldvalue) => {
      return oldvalue.filter((data, index) => {
        return index !== id
      })
    })

  }
  return (
    <>
      <div className="App">
        <h1 >Here Here Here</h1>
        <input type="text" placeholder="Here Your Enter" value={inputdata} onChange={dataChange} />
        &nbsp;<button onClick={Alldatasubmit}>+</button>
      </div>

      <div className="App">
        {newentry.map((datas, index) => {
          return (
            <div key={index} className='main'>
              <div className='div1'>
                <i className="fa fa-window-close" aria-hidden="true" onClick={() => dataDelete(index)}></i>
              </div>
              <div className='div2'>
                <h6>{datas}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;




