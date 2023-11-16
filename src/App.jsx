import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
// import USPage from './pages/StitchesPage/USPage'
import UKPage from './pages/StitchesPage/UKPage'
import FavPage from './pages/StitchesPage/FavPage'
import StitchPage from './pages/StitchesPage/StitchPage'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [stitches, setStitches] = useState([]);
  const [activeStitch, setActiveStitch] = useState();  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const path = window.location.pathname.split('/stitch/')
  const idInUrl = path?.length > 0  ? path[1] : ''

    useEffect(() => {
        
        async function fetchData() {
            setLoading(true);
            try {
                let {data} = await axios.get(`http://localhost:8080/?requestQuery=page`)
                setStitches(JSON.parse(data));
            }
            catch {
                console.log('Error fetching data from the DB');
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    },[])

    useEffect(() => {
      if (stitches && idInUrl) {
        setActiveStitch(stitches.find(stitch => stitch.stitch_id === idInUrl))
      }
    },[stitches, idInUrl])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/UK' element={<UKPage error={error} loading={loading} stitches={stitches} setStitches={setStitches} setActiveStitch={setActiveStitch} />} />
        <Route path='/fav' element={<FavPage stitches={stitches} setStitches={setStitches} setActiveStitch={setActiveStitch} />} />
        <Route path='/stitch/:id' element={<StitchPage activeStitch={activeStitch} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
