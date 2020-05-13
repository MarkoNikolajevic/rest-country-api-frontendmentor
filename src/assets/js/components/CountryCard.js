import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className='country-card rounded-md shadow-lg'>
      <img
        src={country.flag}
        alt={country.name}
        className='mb-5 rounded-t-md'
      />
      <div className='country-info pl-8 mb-10'>
        <h4 className='country-name mb-5 tracking-wide'>{country.name}</h4>
        <p className='label tracking-wider'>
          Population: <span>{country.population}</span>
        </p>
        <p className='label tracking-wider'>
          Region: <span>{country.region}</span>
        </p>
        <p className='label tracking-wider'>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
