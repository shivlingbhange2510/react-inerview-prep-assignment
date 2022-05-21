
import './App.css';
// import {Navbar} from '../Navbar/Navbar'
import {AddCity} from './Components/AddCity';
import { AddCountry } from './Components/AddCountry';
import { Home } from './Components/Home';
import {EditCountry} from './Components/EditCountry'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar  } from './Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path={`/add-country`} element={<AddCountry/>} />
       <Route path={`/add-city`} element={<AddCity/>} />
       <Route path={`/edit-city/:id`} element={<EditCountry/>} />
     </Routes>
    </div>
  );
}

export default App;
