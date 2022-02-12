import React from 'react';

const AuctionDataItem = ({ item }) => {
  console.log(item);
  return (
    <tr key={item.id}>
      <td>{item.item.name}</td>
    </tr>
  );
};

export default AuctionDataItem;
