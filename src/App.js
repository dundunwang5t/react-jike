import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './page/Login'
import Layout from './page/Layout'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;