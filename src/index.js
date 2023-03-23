import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/DrashBoard/Home';
import Customer from './components/DrashBoard/Customer';
import Deliveries from './components/DrashBoard/Deliveries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
    <App />
    <Routes>
             
      
                <Route path ='/home' element={<Home/>} />     
                <Route path ='/customers' element={<Customer/>} />     
                <Route path ='/deliveries' element={<Deliveries/>} />     
            
             
             
           </Routes>
  </React.StrictMode>
  </BrowserRouter>
 
);


