import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Navegaciones/Cart'

function App() {
  return (
    <BrowserRouter>

      <NavBar />


      <Routes>
        {/* <ItemListContainer greeting="Shop San Luis" />
        <ItemDetailContainer /> */}

        <Route exact path='/' element={<ItemListContainer/>}  />
        {/* <Route exact path='/' element={<Home/>}  /> */}

        <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
        
        {/* ¿¿¿¿¿¿¿¿¿¿ <Route exact path='/category/:id' element={<ItemDetailContainer/>}  /> ?????????? */}
        {/* <Route exact path='/about' element={<About/>}  /> */}

        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />


        <Route exact path='/cart' element={<Cart />} />
      
      </Routes>

      {/* <ProductDetail/> */}

      <Footer />

    </BrowserRouter>
  )
}

export default App