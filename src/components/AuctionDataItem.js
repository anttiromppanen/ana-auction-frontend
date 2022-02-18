import React from 'react';

const AuctionDataItem = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.bid}</td>
      <td>{item.buyout}</td>
      <td>{item.time_left}</td>
    </tr>
  );
};

export default AuctionDataItem;
