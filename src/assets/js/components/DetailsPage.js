import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({ countries }) => {
  let { countryName } = useParams();
  let selectedCountry = countries.find(
    (country) =>
      country.name.toLowerCase().replace(/\s/g, '') ===
      countryName.toLowerCase().replace(/\s/g, '')
  );

  return (
    <div className='m-8 lg:mx-16'>
      <button
        className='back-btn flex justify-center items-center w-24 h-10 rounded-md shadow-lg transition-transform duration-200 ease-in-out'
        onClick={() => window.history.back()}
      >
        <ion-icon name='arrow-back-outline'></ion-icon>
        <span className='ml-3'>Back</span>
      </button>
      <div className='country-detail my-8 grid lg:grid-cols-2 lg:gap-10'>
        <img
          className='w-full shadow-lg'
          src={selectedCountry.flag}
          alt={selectedCountry.name}
        />
        <div className='grid lg:grid-cols-2'>
          <div>
            <h3 className='mt-12 mb-8 lg:mb-6 font-extrabold text-base'>
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
              Region:{' '}
              <span className='opacity-75'>{selectedCountry.region}</span>
            </p>
            <p className='tracking-wider'>
              Sub Region:{' '}
              <span className='opacity-75'>{selectedCountry.subregion}</span>
            </p>
            <p className='tracking-wider'>
              Capital:{' '}
              <span className='opacity-75'>{selectedCountry.capital}</span>
            </p>
          </div>
          <div>
            <p className='tracking-wider mt-10 lg:mt-24'>
              Top Level Domain:{' '}
              <span className='opacity-75'>
                {selectedCountry.topLevelDomain}
              </span>
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
          </div>
          <div>
            <h4 className='mt-10 lg:mt-0 font-extrabold text-base'>
              Border Countries
            </h4>
            <p>
              {selectedCountry.borders.map((border) => {
                return (
                  <span
                    className='opacity-75'
                    key={border}
                  >{`${border} `}</span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
