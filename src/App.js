import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './all.css'
import { About, Contact, Home , Login, NotFound, Product, Register } from './pages';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
