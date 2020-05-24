import React from 'react';

import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className='country-card transition-transform duration-200 ease-in-out cursor-pointer rounded-md shadow-lg'>
      <Link to={`${country.name}`}>
        {/* {`${country.name.toLowerCase().replace(/\s/g, '')}`} */}
        <img
          src={country.flag}
          alt={country.name}
          className='mb-5 rounded-t-md'
        />
        <div className='country-info pl-4 mb-10'>
          <h4 className='font-extrabold mb-5 tracking-wide'>{country.name}</h4>
          <p className='tracking-wider'>
            Population:{' '}
            <span className='opacity-75'>
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </span>
          </p>
          <p className='tracking-wider'>
            Region: <span className='opacity-75'>{country.region}</span>
          </p>
          <p className='tracking-wider'>
            Capital: <span className='opacity-75'>{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
