import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
