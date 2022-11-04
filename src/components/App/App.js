import './App.scss';
import Header from '../header/header';
import HeaderInfo from '../headerInfo/headerInfo';

function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <Header />
        <HeaderInfo />
      </div>
    </div>
  );
}

export default App;
