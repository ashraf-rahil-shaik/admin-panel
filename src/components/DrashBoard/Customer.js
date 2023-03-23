import React, { useState } from 'react';
import Navbar from './NavBar';

const customers = [
  { id: 1, name: 'Peter Parker', email: 'peterparker@example.com', isBlocked: false },
  { id: 2, name: 'Tony Stark', email: 'tonystark@example.com', isBlocked: true },
  { id: 3, name: 'steven strange', email: 'stevenstrange@example.com', isBlocked: false },
];

const Customer = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [customerList, setCustomerList] = useState(customers);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setEditingCustomer(null);
  };

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
  };

  const handleDeleteCustomer = (customer) => {
    const updatedList = customerList.filter((c) => c.id !== customer.id);
    setCustomerList(updatedList);
    setSelectedCustomer(null);
    setEditingCustomer(null);
  };

  const handleBlockCustomer = (customer) => {
    const updatedList = customerList.map((c) => {
      if (c.id === customer.id) {
        return { ...c, isBlocked: true };
      }
      return c;
    });
    setCustomerList(updatedList);
  };

  const handleUnblockCustomer = (customer) => {
    const updatedList = customerList.map((c) => {
      if (c.id === customer.id) {
        return { ...c, isBlocked: false };
      }
      return c;
    });
    setCustomerList(updatedList);
  };

  return (
    <>
          <Navbar/>
    <div className='container-customer'>
  
      <h2>Customer List</h2>
      <ul className='cust-details'>
        {customerList.map((customer) => (
          <li key={customer.id}>
            {customer.name} ({customer.email})
            <button onClick={() => handleSelectCustomer(customer)}>View</button>
            <button onClick={() => handleEditCustomer(customer)}>Edit</button>
            <button onClick={() => handleDeleteCustomer(customer)}>Delete</button>
            {customer.isBlocked ? (
              <button onClick={() => handleUnblockCustomer(customer)}>Unblock</button>
            ) : (
              <button onClick={() => handleBlockCustomer(customer)}>Block</button>
            )}
          </li>
        ))}
      </ul>
      {selectedCustomer && (
        <div className='selected-customer'>
          <h3>Selected Customer</h3>
          <p>Name: {selectedCustomer.name}</p>
          <p>Email: {selectedCustomer.email}</p>
          {editingCustomer ? (
            <div>
              <h4>Edit Customer</h4>
              <form onSubmit={(e) => e.preventDefault()} className="edit-customer-form">
                <label>
                  Name:
                  <input
                    type="text"
                    value={editingCustomer.name}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, name: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={editingCustomer.email}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, email: e.target.value })
                    }
                  />
                </label>
                <button
                  onClick={() => {
                    const updatedList = customerList.map((c) => {
                      if (c.id === editingCustomer.id) {
                        return editingCustomer;
                      }
                     
                      return c;
                    });
                    setCustomerList(updatedList);
                    setSelectedCustomer(editingCustomer);
                    setEditingCustomer(null);
                  }}
                >
                  Save
                </button>
                <br />
                <button onClick={() => setEditingCustomer(null)}>Cancel</button>
                
              </form>
            </div>
          ) : (
            <div>
              <button onClick={() => setEditingCustomer(selectedCustomer)}>Edit</button>
              {selectedCustomer.isBlocked ? (
                <button onClick={() => handleUnblockCustomer(selectedCustomer)}>Unblock</button>
              ) : (
                <button onClick={() => handleBlockCustomer(selectedCustomer)}>Block</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
    </>
    );
    };

    export default Customer