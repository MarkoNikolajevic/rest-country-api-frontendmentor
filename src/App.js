import React, { useState, useEffect } from 'react';
import './assets/style/App.scss';
import axios from 'axios';

// theme toggle tutorial from this article https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme/theme';
import { GlobalStyles } from './assets/style/theme/global';

import Navbar from './assets/js/components/Navbar';
import CountryCard from './assets/js/components/CountryCard';
import DetailsPage from './assets/js/components/DetailsPage';

function App() {
  const [countries, setCountries] = useState([]);
  const [filterByRegion, setFilterByRegion] = useState('all');
  const [filterByName, setFilterByName] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all/')
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  // get regions
  let regionArr = [];
  countries.map((country) => {
    return regionArr.push(country.region);
  });

  // get unique regions and remove last empty string element
  let uniqueRegion = [...new Set(regionArr)];
  uniqueRegion = uniqueRegion.filter((region) => region);

  // toggle theme
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleChange = (event) => {
    setFilterByName(event.target.value);
  };

  const filteredByName = !filterByName
    ? countries
    : countries.filter((country) =>
        country.name.toLowerCase().includes(filterByName.toLowerCase())
      );

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <div className='filter-inputs mx-8'>
            <div className='search-wrapper my-8'>
              <span className='search-icon'>
                <ion-icon name='search-outline'></ion-icon>
              </span>
              <input
                type='text'
                placeholder='Search for a country...'
                className='search-by-name px-16 rounded-md shadow-lg w-full'
                value={filterByName}
                onChange={handleChange}
              />
            </div>
            <div className='costum-select inline-block relative w-50'>
              <select className='search-by-region block appearance-none w-full px-4 py-2 pr-8 rounded-md shadow-lg focus:outline-none focus:shadow-outline'>
                <option
                  value='all'
                  onClick={(e) => setFilterByRegion(e.target.value)}
                >
                  Filter by Region
                </option>
                {uniqueRegion.map((region) => {
                  return (
                    <option
                      region={region}
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-12 my-8'>
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
          <DetailsPage countries={countries} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
