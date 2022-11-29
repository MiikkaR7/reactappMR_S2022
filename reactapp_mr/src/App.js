import './App.css';
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
        <Switch>
          <Route path="/" exact>
            <MainPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
