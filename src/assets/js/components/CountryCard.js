import React from 'react';
import DetailsPage from './DetailsPage';

const CountryCard = ({ country }) => {
  return (
    <div
      className='country-card rounded-md shadow-lg'
      onClick={() => {
        console.log(country.name.toLowerCase().replace(/\s/g, ''));
        /* window.location.href = country.name.toLowerCase().replace(/\s/g, ''); */
      }}
    >
      <img
        src={country.flag}
        alt={country.name}
        className='mb-5 rounded-t-md'
      />
      <div className='country-info pl-4 mb-10'>
        <h4 className='country-name mb-5 tracking-wide'>{country.name}</h4>
        <p className='label tracking-wider'>
          Population:{' '}
          <span>
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </span>
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
