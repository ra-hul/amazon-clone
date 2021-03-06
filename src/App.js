import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<><Header /><Home/></>}/> 
       
      </Routes>
  
    </div>
    </Router>
  );
}

export default App;
