import React, { useState, useEffect } from 'react';
import './assets/style/App.scss';
import axios from 'axios';

// theme toggle tutorial from this article https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme/theme';
import { GlobalStyles } from './assets/style/theme/global';

import Navbar from './assets/js/components/Navbar';
import Home from './assets/js/components/Home';
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

  // toggle theme
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className='App'>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Home
          countries={countries}
          filterByName={filterByName}
          setFilterByName={setFilterByName}
          filterByRegion={filterByRegion}
          setFilterByRegion={setFilterByRegion}
        />
        <DetailsPage countries={countries} />
      </div>
    </ThemeProvider>
  );
}

export default App;
