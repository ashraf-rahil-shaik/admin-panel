import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';

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
    <div>
        <Navbar/>
      <h1>Admin Dashboard</h1>

      <ul>
        <li>No. of customers: {customers}</li>
        <li>No. of drivers: {drivers}</li>
        <li>No. of deliveries: {deliveries}</li>
        <li>Total Canceled Deliveries: {canceledDeliveries}</li>
        <li>Total warehouses: {warehouses}</li>
        <li>Total Revenue: {revenue}</li>
      </ul>
    </div>
  );
}

export default Home;