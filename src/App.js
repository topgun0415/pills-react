/** @format */

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ProductList from './components/ViewProduct/ProductList';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Reviews' element={<Reviews />} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/test3' />
          <Route path='/test4' />
          <Route path='/test5' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
