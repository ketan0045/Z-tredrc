// contextapi
// import React, { createContext } from 'react'
// import ComB from './ComB'

// export const FirstName = createContext();
// export const lastName = createContext();
// export const thirdName = createContext();

// const ComA = () => {

//     return (
//         <FirstName.Provider value={"jay1"}>
//             <lastName.Provider value={"jay2"}>
//                 <thirdName.Provider value={"jay3"}>
//                     <ComB />
//                 </thirdName.Provider>
//             </lastName.Provider>
//         </FirstName.Provider>
//     )
// }

// export default ComA;
// // export { FirstName, lastName };


import React, { createContext, useState } from 'react'
import ComB from './ComB'

const data1 = createContext();
const data2 = createContext();

const ComA = () => {
    // useState
    const [count, setcount] = useState(0)

    const dataUpdate=()=>{
        setcount(count+1)
    }

    return (
        <data1.Provider value={"dataStack1"}>
            <data2.Provider value={[count,setcount  ]}>
                <ComB />
            </data2.Provider>
        </data1.Provider>
    )    
}

export default ComA
export { data1, data2 }

 


          
