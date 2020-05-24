import React, { useState, useEffect } from 'react';
import './assets/style/App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// theme toggle tutorial from this article https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme/theme';
import { GlobalStyles } from './assets/style/theme/global';

import ScrollToTop from './assets/js/components/ScrollToTop';

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
      <Router>
        <ScrollToTop />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Switch>
          <Route exact path='/'>
            <Home
              countries={countries}
              filterByName={filterByName}
              setFilterByName={setFilterByName}
              filterByRegion={filterByRegion}
              setFilterByRegion={setFilterByRegion}
            />
          </Route>
          <Route
            path='/:countryName'
            children={<DetailsPage countries={countries} />}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
