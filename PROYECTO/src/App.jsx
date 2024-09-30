import './App.css'
import  './components/NavBar/NavBar'
import './components/CartWidget/CartWidget'
import './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
    return (
    <>
      <BrowserRouter> 
        <NavBar/> 
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
          

          <Route exact path="/product/:id" element={<ItemDetailContainer/>} />

         

          
        </Routes>

      </BrowserRouter>
  </>
  )
}

export default App
