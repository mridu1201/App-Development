import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
