import React from 'react';

const ShowProfit = ({ result }) => (
  <span style={{ color: result > 0 ? '#00C6B6' : '#FF8070' }}>{result} %</span>
);

export default ShowProfit;
