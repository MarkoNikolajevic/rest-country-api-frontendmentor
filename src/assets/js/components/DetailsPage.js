import React from 'react';

const DetailsPage = ({ countries }) => {
  return (
    <div>
      <button>
        <ion-icon
          name='arrow-back-outline'
          onClick={() => {
            countries.map((country) => {
              console.log(country.name);
            });
          }}
        ></ion-icon>
        Back
      </button>
      <div className='country-detail'></div>
    </div>
  );
};

export default DetailsPage;
