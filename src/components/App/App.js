import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import HeaderInfo from '../headerInfo/headerInfo';

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
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
