import React from "react";

const deliveriesData = [
  {
    id: 1,
    dateTime: "2023-03-22 10:30:00",
    day: "Monday",
    sourceLocation: "123 Main St",
    destinationLocation: "456 Elm St",
    customerDetails: "peter parker ",
    fareAmount: "Rs25.00",
    paymentMode: "Credit Card",
    cancellationDetails: null,
  },
  {
    id: 2,
    dateTime: "2023-03-23 14:45:00",
    day: "Tuesday",
    sourceLocation: "789 today St",
    destinationLocation: "1011 Pine St",
    customerDetails: "tony stark",
    fareAmount: "Rs.30.50",
    paymentMode: "Cash",
    cancellationDetails: {
      reason: "Customer no show",
      fee: "Rs5.00",
    },
  },
  {
    id: 2,
    dateTime: "2023-03-23 14:45:00",
    day: "Tuesday",
    sourceLocation: "789 today St",
    destinationLocation: "1011 Pine St",
    customerDetails: "tony stark",
    fareAmount: "Rs.30.50",
    paymentMode: "Cash",
    cancellationDetails: {
      reason: "Customer no show",
      fee: "Rs5.00",
    },

  },
  {
    id: 1,
    dateTime: "2023-03-22 10:30:00",
    day: "Monday",
    sourceLocation: "123 Main St",
    destinationLocation: "456 Elm St",
    customerDetails: "peter parker ",
    fareAmount: "Rs25.00",
    paymentMode: "Credit Card",
    cancellationDetails: null,
  },
];

const Deliveries = () => {
  return (
    <div>
      <h2>Deliveries</h2>
      <table>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Day</th>
            <th>Source Location</th>
            <th>Destination Location</th>
            <th>Customer Details</th>
            <th>Fare Amount</th>
            <th>Payment Mode</th>
            <th>Cancellation Details</th>
          </tr>
        </thead>
        <tbody>
          {deliveriesData.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.dateTime}</td>
              <td>{delivery.day}</td>
              <td>{delivery.sourceLocation}</td>
              <td>{delivery.destinationLocation}</td>
              <td>{delivery.customerDetails}</td>
              <td>{delivery.fareAmount}</td>
              <td>{delivery.paymentMode}</td>
              <td>
                {delivery.cancellationDetails ? (
                  <>
                    <p>{delivery.cancellationDetails.reason}</p>
                    <p>Fee: {delivery.cancellationDetails.fee}</p>
                  </>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deliveries;
