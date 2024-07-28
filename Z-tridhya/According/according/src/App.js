import './App.css';
import { useState } from 'react';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import Restaturnt from './components/Basics/Restaturnt';

function App() {
  const [newData, setNewData] = useState([]);

  const receiveData = ((inputdata) => {
    setNewData((oooo) => {
      return [...oooo, inputdata]
    })
  });

  const deleteRoeData = (id) => {
    setNewData((oldvalue) => {
      return oldvalue.filter((alldata, inex) => {
        return inex !== id
      });
    })
  }
  // const deleteRoeData = (id) => {
  //   setNewData(newData.filter((alldata, inex) =>
  //        inex !== id
  //     )
  //   )
  // }


//   return (
//     <div className="App">
//       {/* Keep clone */}
//       <Header />
//       <CreateNote dataSend={receiveData} />
//       {newData.map((enterData, index) => {
//         return <Notes title={enterData.title} content={enterData.content} key={index} id={index} deleteRoeData={deleteRoeData} />
//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;



  return (
    <div>
      <Restaturnt/>
    </div>
  )
}

export default App


