import './App.css';
import Createmock from './components/mockapi/Createmock';
import Readmock from './components/mockapi/Readmock';
import Updatemock from './components/mockapi/Updatemock';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Normal from './normal/Normal';

function App() {
  return (
    <div className="App">
      {/* <Normal/> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Createmock />}></Route>
          <Route path="/readmock" element={<Readmock />}></Route>
          <Route path="/updatemock" element={<Updatemock />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
