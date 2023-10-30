import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import StudentDetails from './pages/StudentDetails';
import {Route, Routes} from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about-us' element={<About/>}/>
    <Route exact path='/student-details/:id/:name' element={<StudentDetails/>}/>
    <Route exact path='/product' element={<Product/>}/>
    </Routes>
    
  );
}

export default App;
