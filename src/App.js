import './App.css';
import {Switch, Route, Redirect} from "react-router-dom"
import SuperHeroList from './components/SuperHeroList';
import SuperHero from './components/SuperHero';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={SuperHeroList} />
        <Route path={"/superhero/:superhero"} exact component={SuperHero} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
