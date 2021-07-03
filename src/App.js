import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router , Route} from "react-router-dom";
import {Container} from 'react-bootstrap'
import Header from "./Component/Header";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <Router>
    <Header />
      <main className='py-3'>
        <Container>
        <Route  path='/' component={HomeScreen} exact />
        <Route  path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
