import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/header';
import HeaderInfo from '../headerInfo/headerInfo';
import Map from '../map/map';
import Connection from '../connection/connection';
import Usage from '../usage/usage';
import ForDev from '../forDev/forDev';
import Partner from '../partner/partner';
import Try from '../try/try';
import ReadMore from '../readMore/readMore';
import Footer from '../footer/footer';

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
              <Usage />
              <div className='app__develop'>
                <ForDev />
              </div>
              <Partner />
              <div className='app__connect'>
                <Try />
                <ReadMore />
              </div>
              <div className='app__footer'>
                <Footer />
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
