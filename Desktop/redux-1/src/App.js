import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Login from './components/Login';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import UserRedirects from './components/UserRedirects';
function App() {
  return (
    <div className="App">  
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/proudct/:id" element={<UserRedirects />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
