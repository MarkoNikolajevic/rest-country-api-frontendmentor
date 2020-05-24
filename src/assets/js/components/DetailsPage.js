import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({ countries }) => {
  let { countryName } = useParams();
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );

  return (
    <div className='m-8'>
      <button
        className='back-btn flex justify-center items-center w-24 h-10 rounded-md shadow-lg transition-transform duration-200 ease-in-out'
        onClick={() => window.history.back()}
      >
        <ion-icon name='arrow-back-outline'></ion-icon>
        <span className='ml-3'>Back</span>
      </button>
      <div className='country-detail my-8'>
        <img
          className='w-full shadow-lg'
          src={selectedCountry.flag}
          alt={selectedCountry.name}
        />
        <h3 className='mt-12 mb-8 font-extrabold text-base'>
          {selectedCountry.name}
        </h3>
        <p className='tracking-wider'>
          Native Name:{' '}
          <span className='opacity-75'>{selectedCountry.nativeName}</span>
        </p>
        <p className='tracking-wider'>
          Population:{' '}
          <span className='opacity-75'>
            {selectedCountry.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </span>
        </p>
        <p className='tracking-wider'>
          Region: <span className='opacity-75'>{selectedCountry.region}</span>
        </p>
        <p className='tracking-wider'>
          Sub Region:{' '}
          <span className='opacity-75'>{selectedCountry.subregion}</span>
        </p>
        <p className='tracking-wider'>
          Capital: <span className='opacity-75'>{selectedCountry.capital}</span>
        </p>
        <p className='tracking-wider mt-10'>
          Top Level Domain:{' '}
          <span className='opacity-75'>{selectedCountry.topLevelDomain}</span>
        </p>
        <p className='tracking-wider'>
          Currencies:{' '}
          {selectedCountry.currencies.map((currency) => {
            return (
              <span className='opacity-75' key={currency.name}>
                {currency.name}
              </span>
            );
          })}
        </p>
        <p className='tracking-wider'>
          Languages:{' '}
          {selectedCountry.languages.map((language) => {
            return (
              <span className='opacity-75' key={language.name}>
                {`${language.name} `}
              </span>
            );
          })}
        </p>
        <h4 className='mt-10 font-extrabold text-base'>Border Countries</h4>
        <p>
          {selectedCountry.borders.map((border) => {
            return (
              <span className='opacity-75' key={border}>{`${border} `}</span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
