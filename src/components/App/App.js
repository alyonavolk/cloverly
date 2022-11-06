import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import HeaderInfo from '../headerInfo/headerInfo';
import Map from '../map/map';
import Connection from '../connection/connection';

function App() {
  return (
    <Router>
    <Header />
      <div className="app">
          <Switch>
            <Route exact path="/">
              <div className='app__header'>
                <HeaderInfo />
              </div>
              <Map />
              <div className='app__connect'>
                <Connection />
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
