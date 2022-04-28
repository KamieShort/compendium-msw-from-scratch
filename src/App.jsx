import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AnimalList from './views/AnimalList';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Check out these <Link to="/recipes">Recipes</Link>
        </Route>

        <Route exact path="/recipes">
          <Link to="/">Back Home</Link>
          <AnimalList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
