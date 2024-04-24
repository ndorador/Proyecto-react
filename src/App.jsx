import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PageNotFound from './components/pageNotFound/pageNotFound'

function App() {

  return (
    
    <ChakraProvider>
     <BrowserProvider>
      <NavBar/>
      <Router>
        <Route path='/' element={<ItemListContainer title='Tienda'/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda' />} />
        <Route path='/producto/:productId' element={<ItemListContainer />} />
        <Route path='*' element={<PageNotFound />} />
      </Router>
      </BrowserProvider>
    </ChakraProvider>
  )
}

export default App