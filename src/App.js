import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBook from './components/NavBook';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<NavBook/>}/>
        <Route path='/add' element = {<AddBook/>}/>
        <Route path='/view' element = {<ViewBook/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
