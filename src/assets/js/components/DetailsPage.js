import React from 'react';

const DetailsPage = ({ countries }) => {
  return (
    <div>
      <button>
        <ion-icon name='arrow-back-outline'></ion-icon>
        Back
      </button>
      <div className='country-detail'>
        {/* {countries.map((country) => {
          return (
            <div className='inner' key={country.name}>
              <img src={country.flag} alt={country.name} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default DetailsPage;
