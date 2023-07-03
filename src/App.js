// import logo from './logo.svg'
import Login from './Login/login';
import Products from './Products/products';
import Navbar from './Navbar/nav';
import './App.css';
import Productinfo from './ProductInfo/productinfo';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddProduct from './AddProduct/addproduct';



function App() {
  return (
    
    <div>
     <Navbar/>

      <BrowserRouter>
      <Routes>
        <Route index element={<Products/>}/>
        <Route path='/home' element={<Products/>} />
        <Route path='/more' element={<Products/>} />
        <Route path='/Products/:productId' element={<Productinfo/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<AddProduct/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;



