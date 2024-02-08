import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBook from './components/NavBook';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<NavBook/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
