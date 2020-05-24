import React from 'react';

import FilterByName from './FilterByName';
import FilterByRegion from './FilterByRegion';
import CountryCard from './CountryCard';

const Home = ({
  countries,
  filterByName,
  setFilterByName,
  filterByRegion,
  setFilterByRegion,
}) => {
  const filteredByName = !filterByName
    ? countries
    : countries.filter((country) =>
        country.name.toLowerCase().includes(filterByName.toLowerCase())
      );
  return (
    <>
      <div className='filter-inputs mx-8 lg:mx-16'>
        <FilterByName setFilterByName={setFilterByName} />
        <FilterByRegion
          countries={countries}
          setFilterByRegion={setFilterByRegion}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-12 my-8'>
        {filteredByName.map((country) => {
          if (filterByRegion === 'all') {
            return <CountryCard country={country} key={country.name} />;
          }
          if (
            country.region === filterByRegion ||
            country.name === filterByName
          ) {
            return <CountryCard country={country} key={country.name} />;
          }
          return true;
        })}
      </div>
    </>
  );
};

export default Home;
