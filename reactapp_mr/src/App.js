import './App.css';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import MainPage from './pages/MainPage';
import WeatherPage from './pages/WeatherPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
          <Route path="/weather" exact>
            <WeatherPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
