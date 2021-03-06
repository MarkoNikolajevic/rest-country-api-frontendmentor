import React from 'react';

const FilterByRegion = ({ countries, setFilterByRegion }) => {
  // get regions
  let regionArr = [];
  countries.map((country) => {
    return regionArr.push(country.region);
  });

  // get unique regions and remove last empty string element
  let uniqueRegion = [...new Set(regionArr)];
  uniqueRegion = uniqueRegion.filter((region) => region);

  return (
    <div className='lg:mt-8'>
      <div className='costum-select inline-block relative w-50'>
        <select
          className='cursor-pointer search-by-region block appearance-none w-full h-12 px-4 py-2 pr-8 rounded-md shadow-lg focus:outline-none focus:shadow-outline'
          aria-label='Filter countries by region'
        >
          <option
            value='all'
            onClick={(e) => setFilterByRegion(e.target.value)}
          >
            Filter by Region
          </option>
          {uniqueRegion.map((region) => {
            return (
              <option
                value={region}
                key={region}
                onClick={(e) => setFilterByRegion(e.target.value)}
              >
                {region}
              </option>
            );
          })}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
          <ion-icon name='chevron-down-outline'></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default FilterByRegion;
