import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Engineer from './pages/Engineer';
import Customer from './pages/Customer';
import PageNotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='engineer' element={<Engineer/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
