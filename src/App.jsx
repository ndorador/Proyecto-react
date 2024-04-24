
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/pageNotFound'

function App() {

  return (
    
    <ChakraProvider>

     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer title='Tienda'/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda' />} />
        <Route path='/producto/:productId' element={<ItemListContainer />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>

    </ChakraProvider>
  )
}

export default App