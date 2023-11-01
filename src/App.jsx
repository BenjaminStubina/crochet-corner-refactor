import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/HomePage"
import USPage from './pages/USPage'
import UKPage from './pages/UKPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/US' element={<USPage/>} />
        <Route path='/UK' element={<UKPage/>} />
        {/* <Route path='/favourites' element={<FavouritesPage/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
