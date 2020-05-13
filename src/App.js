import React, { useState, useEffect } from 'react';
import './assets/style/App.scss';
import axios from 'axios';

// theme toggle tutorial from this article https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme/theme';
import { GlobalStyles } from './assets/style/theme/global';

import Navbar from './assets/js/components/Navbar';
import CountryCard from './assets/js/components/CountryCard';

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all/')
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // const filterByRegion = [];

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-12 my-8'>
            {countries.map((country) => {
              return <CountryCard country={country} key={country.name} />;
            })}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
