import './App.css';
import { Navbar, Usuario } from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/lista/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer />
    </div>
  );
}

export default App;
