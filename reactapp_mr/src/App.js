import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import AboutPage from './pages/AboutPage';
import WeatherPage from './pages/WeatherPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
        <Switch>
          <Route path="/" exact>
            <WeatherPage/>
          </Route>
          <Route path="/about" exact>
            <AboutPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
