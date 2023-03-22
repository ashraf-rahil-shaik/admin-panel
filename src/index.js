import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/DrashBoard/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
    <App />
    <Routes>
             
      
                <Route path ='/home' element={<Home/>} />     
            
             
             
           </Routes>
  </React.StrictMode>
  </BrowserRouter>
 
);


