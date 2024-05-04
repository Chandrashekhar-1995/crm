import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../src/pages/Login";
import Admin from "../src/pages/Admin";
import Engineer from "../src/pages/Engineer";
import Customer from "../src/pages/Customer";
import Error from "../src/pages/Error";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/engineer' element={<Engineer/>} />
        <Route path='/customer' element={<Customer/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
