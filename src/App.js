import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from "./Router";
import NavbarComponent from './components/Navbar/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
