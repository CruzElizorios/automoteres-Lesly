import './App.css';
import { Navbar, Usuario } from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/lista/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardDetail } from './componentes/cardDetail/CardDetail';

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detalles/:id' element={<CardDetail/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
