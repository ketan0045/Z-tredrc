import React from 'react'
// import Sdata from './Sdata';
// import Card from './Cards';
import Netflix from './Netflix';
import Amzon from './Amzon';

const favs = "netflix";

// const Fav =()=>{  
// if(favs === "netflix"){
//   return <Netflix/>
// }else{
//     return <Amzon/>
// }
// }
// using ternary condition

const App = () => {
    return (
        <>
            <h1>All Data</h1>
            {/* 1. <Fav/> */}
            {/* {Sdata.map((val) => {
                return (
                    <Card
                        key={val.id}
                        sname={val.sname}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        links={val.links} />
                )
            })} */}

            {(favs === "netflix") ? <Netflix /> : <Amzon />}

        </>
    )
}

export default App


// 2
// import React from 'react'

// const App = () => {

//   const SlotM = (props) => {
//     // let x = "1";
//     // let y = "2";
//     // let z = "1";
//     let { x, y, z } = props;

//     if (x === y && y === z) {

//       return (
//         <>
//          { console.log(x,y,z)}
//           {x}  {y}  {z}
//           <h1>this is matching</h1>
//           <hr />
//         </>
//       )
//     } else {
//       return (
//         <>
//         { console.log(x,y,z)}
//           {x}  {y}  {z}
//           <h1>this is not matching</h1>
//           <hr />
//         </>
//       )
//     }
//   }
//   return (
//     <>
//       <div className='main'>
//         <h1 style={{ border: "2px solid pink", textAlign: 'center ' }}>Slot machine</h1>
//         <hr />
//       </div>
//       <SlotM x="1" y="1" z="1" />
//       <SlotM x="1" y="3" z="1" />
//       <SlotM x="2" y="1" z="1" />
//       <SlotM x="2" y="2" z="2" />
//     </>
//   )
// }

// export default App

//  3
// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState("Hello")

//   // const Btnclick = () => {

//   //   if (name === "Hello") {
//   //     setName("baby")
//   //   } else {
//   //     setName("Hello")
//   //   }
//   // }

//   const Btnclick = () => {
//     (name === "Hello") ?  setName("baby") : setName("Hello"); 
//   }

//   return (
//     <>
//       <h1>{name}</h1>
//       <button onClick={Btnclick}>Click</button>
//     </>
//   )
// }

// export default App









