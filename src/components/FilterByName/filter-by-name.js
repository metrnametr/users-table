import React from 'react';
import { Input } from 'semantic-ui-react';

const filterByName = ({ toggleFilterByName }) => {
  const onChangeFilter = (e) => {
    const { value } = e.target;
    toggleFilterByName(value);
  };

  return <Input onChange={onChangeFilter} placeholder="Input full name" />;
};

export default filterByName;
