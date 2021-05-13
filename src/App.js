import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from './Details';
import ThemeContext from './ThemeContext';
import { StrictMode, useState } from 'react';

const App = () => {
  const theme = useState('darkblue');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
