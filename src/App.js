import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RequireAuth from "./components/RequireAuth";
import Login from './pages/Login';
import Admin from './pages/Admin';
import Engineer from './pages/Engineer';
import Customer from './pages/Customer';
import PageNotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';


const ROLES ={
    'CUSTOMER' : 'CUSTOMER',
    'ADMIN': 'ADMIN',
    'ENGINEER': 'ENGINEER'
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
        <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.ENGINEER]}/>}>
        <Route path='engineer' element={<Engineer/>}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.CUSTOMER]}/>}>
        <Route path='customer' element={<Customer/>}/>
        </Route>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/unauthorized' element={<Unauthorized/>}/>
      </Routes>
    </Router>
  );
}

export default App;
