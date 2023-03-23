import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import './Home.css'


function Home() {
  const [customers, setCustomers] = useState(0);
  const [drivers, setDrivers] = useState(0);
  const [deliveries, setDeliveries] = useState(0);
  const [canceledDeliveries, setCanceledDeliveries] = useState(0);
  const [warehouses, setWarehouses] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => {
        setCustomers(response.data.customers);
        setDrivers(response.data.drivers);
        setDeliveries(response.data.deliveries);
        setCanceledDeliveries(response.data.canceledDeliveries);
        setWarehouses(response.data.warehouses);
        setRevenue(response.data.revenue);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <h1>Admin Dashboard</h1>
    <div className="container">
  


      <div className="card">
        <h2>No. of customers</h2>
        <p>{customers}</p>
      </div>

      <div className="card">
        <h2>No. of drivers</h2>
        <p>{drivers}</p>
      </div>

      <div className="card">
        <h2>No. of deliveries</h2>
        <p>{deliveries}</p>
      </div>

      <div className="card">
        <h2>Total Canceled Deliveries</h2>
        <p>{canceledDeliveries}</p>
      </div>

      <div className="card">
        <h2>Total warehouses</h2>
        <p>{warehouses}</p>
      </div>

      <div className="card">
        <h2>Total Revenue</h2>
        <p>{revenue}</p>
      </div>

    </div>
    </>
  );
}

export default Home;
