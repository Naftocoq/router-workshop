import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from "./Pages/Contact"
import ErrorPage from './Pages/ErrorPage';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ProductDetails';

function App() {
  const isAuth = true;
  return (
    <div className="App">
      <Navigation isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
