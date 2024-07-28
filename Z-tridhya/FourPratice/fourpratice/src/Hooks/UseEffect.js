// import React, { useEffect, useState } from 'react';

// const UseEffect = () => {
//     const [count, setCount] = useState(0);
//     //   WHEN USESTATE CHANGE(means update) THAT CoMPONENTS AAKHO CoMPONENT RERENDER(rerender) THAY

//     const btnClick = () => {
//         setCount(count + 1);
//     }

//     useEffect(() => {
//         document.title = `Chats  (${count})`
//         console.log("inner useEffect ----3")
//     },[]);

//     console.log("outer useEffect ----1");
//     return (
//         <>
//             <h1>{count}</h1>
//             <h1>{console.log("cccccc ----2")}</h1>
//             <button onClick={btnClick}>Click</button>
//         </>
//     )
// }

// export default UseEffect


// 2.cleanup function


// import React, { useEffect, useState } from 'react';

// function UseEffect() {
//     const [width, setWidth] = useState(window.screen.width);

//     const handleWidth = () => {
//         console.log("11111", window.innerWidth)
//         setWidth(window.innerWidth);
//     }

//     useEffect(() => {
//         console.log("add event")
//         window.addEventListener("resize", handleWidth);

//         return () => {
//             console.log("remove event");
//                          window.removeEventListener("resize", handleWidth);
//         }
//     });

//     return (
//         <div>
//             <p>screen window width</p>
//             <h1>{width}</h1>
//         </div>
//     )
// }

// export default UseEffect






            
            