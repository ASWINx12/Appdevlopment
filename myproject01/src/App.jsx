import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intropage from './Intropage';
import Dashboard from './Dashboard';
import DashNavbar from './DashNavbar';
import ContactUs from './Contactus';
import AboutUs from './Aboutus';
import Userdashboard from './Userdashboard';
import { AppProvider } from './AppContext';
import AdminHome from './Adminhome';


function App() {
  return (
    <div className='apphome'>
    <AppProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Intropage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
        <Route path='/user-dashboard' element={<Userdashboard/>}/>
        <Route path='/navdashboard' element={<DashNavbar/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </Router>
    </AppProvider>
    </div>
  );
}
export default App;
