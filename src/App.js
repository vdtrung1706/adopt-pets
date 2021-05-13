import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from './Details';

const App = () => {
  return (
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
  );
};

render(<App />, document.getElementById('root'));
