import React from 'react';

const ArrayList = ({ list }) => {
  return <div>- {list.join(', ')}</div>;
};

export default ArrayList;