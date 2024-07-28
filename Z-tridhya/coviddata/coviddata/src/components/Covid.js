import React, { useEffect, useState } from 'react';

const Covid = () => {
    const [data, setData] = useState([]);
    console.log(data);   

    const getdata = async () => {
        try {
            const data1 = await fetch("https://data.covid19india.org/data.json");
            const data2 = await data1.json();
            setData(data2.statewise[0]);
            console.log(data2.statewise[9]);
        } catch (error) {
            console.log(error,"rrr")
        }
    }

    useEffect(() => {
        getdata();
    }, []);
  
    return (
        <>
            <h1>Live data</h1>
            <h3>our country</h3>

            <p>India</p>

            <h3>recovered</h3>
            <p>{data.recovered}</p>

            <h3>confirmed</h3>
            <p>{data.confirmed}</p>

            <h3>deltadeaths</h3>
            <p>{data.deltadeaths}</p>

            <h3>active</h3>
            <p>{data.active}</p>

            <h3>lastupdatedtime</h3>
            <p>{data.lastupdatedtime}</p>
        </>
    )
}

export default Covid



// import './App.css';

// let currDate = new Date(2020,5,6,21);
// let hours = currDate.getHours();

// let greeting = " ";
// let styleobj = {}


// if(hours >= 1 && hours < 12){
//   greeting = "good morning"
//   styleobj.color = "green"

// }else if(hours >= 12 && hours < 19){
//   greeting = "good afternoon"
//   styleobj.color = "orange"

// }else{
//   greeting = "good night"
//   styleobj.color = "blue"
// }

// function App() {
//   return (
//     <>
//       <h4>Hello, <span style={styleobj}>{greeting}</span></h4>
//     </>
//   );
// }

// export default App;









