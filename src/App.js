import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
      <Books />
      </Route>
      <Route exact path="/categories">
      <Categories />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
