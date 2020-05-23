import React from 'react';

const DetailsPage = ({ countries }) => {
  return (
    <div className='m-8'>
      <button
        className='back-btn flex justify-center items-center w-24 h-10 rounded-md shadow-lg transition-transform duration-200 ease-in-out'
        onClick={() => window.history.back()}
      >
        <ion-icon name='arrow-back-outline'></ion-icon>
        <span className='ml-3'>Back</span>
      </button>
      <div className='country-detail'></div>
    </div>
  );
};

export default DetailsPage;
