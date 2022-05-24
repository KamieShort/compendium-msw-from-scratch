import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AnimalList from './views/AnimalList';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Check out these <Link to="/animals">Animals</Link>
        </Route>

        <Route exact path="/animals">
          <Link to="/">Back Home</Link>
          <AnimalList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
