import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './all.css'
import { About, Cart, Checkout, Contact, Home , Login, NotFound, Product, ProductsPage, Register } from './pages';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
