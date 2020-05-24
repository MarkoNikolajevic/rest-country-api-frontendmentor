import React from 'react';

const FilterByName = ({ filterByName, setFilterByName }) => {
  // filter by name
  const handleChange = (event) => {
    setFilterByName(event.target.value);
  };

  return (
    <div className='search-wrapper my-8'>
      <span className='search-icon'>
        <ion-icon name='search-outline'></ion-icon>
      </span>
      <input
        type='text'
        placeholder='Search for a country...'
        className='search-by-name px-16 rounded-md shadow-lg w-full h-12'
        value={filterByName}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterByName;
