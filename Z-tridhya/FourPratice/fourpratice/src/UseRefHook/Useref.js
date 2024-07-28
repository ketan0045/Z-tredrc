// useRef NO re-render
// import React, { useRef,useState} from 'react'

// const Useref = () => {
//     const cname = useRef("");
//     const [work, setWork] = useState(false)

//     const dataSubmit = (e) => { 
//         e.preventDefault()
//         console.log(cname.current.value);
//         const workName = cname.current.value;
//         workName === "" ? alert("plz fill below data") : setWork(true);
//     }
//     return (
//         <>
//             <form onSubmit={dataSubmit}>
//                 <label> company name :</label>
//                 <input type='text' ref={cname} /><br />
//                 <button> Submit</button>
//             </form>

//            <p> {work ? `your company name ${cname.current.value}` : ""}</p>
//         </>
//     )
// }

// export default Useref


import React, { useRef } from 'react';

const MyComponent = () => {
  const divRef = useRef(null);

  const handleButtonClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <div ref={divRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}></div>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
};

export default MyComponent;














