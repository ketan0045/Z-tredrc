// contextapi
// import React from 'react'
// import { FirstName, lastName, thirdName } from './ComA'

// const ComC = () => {

//     return (
//         <FirstName.Consumer>
//             {(name1) => {
//                 return (
//                     <lastName.Consumer>
//                         {(name2) => {
//                             return (
//                                 <thirdName.Consumer>
//                                     {(name3) => {
//                                         return (
//                                             <h1>This name {name1} and {name2} && {name3} </h1>
//                                         )
//                                     }}
//                                 </thirdName.Consumer>
//                             )
//                         }}
//                     </lastName.Consumer>
//                 )
//             }}
//         </FirstName.Consumer>
//     )
// }

// export default ComC


import React, { useContext } from 'react';
import { data1,data2 } from './ComA';

const ComC = () => {
    const datas1 = useContext(data1);
    const [count,setcount ]= useContext(data2);
    console.log(count,"&&",setcount,"11");
 

    return (
        <div>
            <h1>{datas1} and {count}</h1>
            <button onClick={()=>setcount(count+1)}>Action </button>
        </div>
    )
}

export default ComC
