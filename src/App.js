import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <div className="App">
     <Header/>
     <HomeScreen/>
    </div>
  );
}

export default App;
