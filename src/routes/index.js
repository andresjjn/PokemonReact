
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/404';
import PokDetail from '../views/PokDetail';
// import ScrollToTop from '../components/ScrollToTop';

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route path='/PokemonReact/' exact>
          <Home />
        </Route>
        <Route path='/pokemon/:id'>
          <PokDetail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
