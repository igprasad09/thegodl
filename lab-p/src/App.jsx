import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import './index.css';
import Programs from './pages/programs';
import Pmg1 from './programs/pmg1'
import Pmg2 from './programs/Pmg2'
import Pmg3 from './programs/Pmg3'
import Pmg4 from './programs/Pmg4'
import Pmg5 from './programs/Pmg5'
import Pmg6 from './programs/Pmg6'
import Pmg7 from './programs/Pmg7'
import Pmg8 from './programs/Pmg8'
import Pmg9 from './programs/Pmg9'
import Pmg10 from './programs/Pmg10'
import Pmg11 from './programs/Pmg11'
import Pmg12 from './programs/Pmg12'
import Pmg13 from './programs/Pmg13'
import Pmg14 from './programs/Pmg14'
import Pmg15 from './programs/Pmg15'
import Pmg16 from './programs/Pmg16'
import Pmg17 from './programs/Pmg17'
import Pmg18 from './programs/Pmg18'
import Pmg19 from './programs/Pmg19'
import Pmg20 from './programs/Pmg20'
import Pmg21 from './programs/Pmg21'
import Pmg22 from './programs/Pmg22'
import Pmg23 from './programs/Pmg23'


export default function App() {
  return (
    <div>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/chat" element={<Chat/>} />

        <Route path="/pmg1" element={<Pmg1 />} />
        <Route path="/pmg2" element={<Pmg2 />} />
        <Route path="/pmg3" element={<Pmg3 />} />
        <Route path="/pmg4" element={<Pmg4 />} />
        <Route path="/pmg5" element={<Pmg5 />} />
        <Route path="/pmg6" element={<Pmg6 />} />
        <Route path="/pmg7" element={<Pmg7 />} />
        <Route path="/pmg8" element={<Pmg8 />} />
        <Route path="/pmg9" element={<Pmg9 />} />
        <Route path="/pmg10" element={<Pmg10 />} />
        <Route path="/pmg11" element={<Pmg11 />} />
        <Route path="/pmg12" element={<Pmg12 />} />
        <Route path="/pmg13" element={<Pmg13 />} />
        <Route path="/pmg14" element={<Pmg14 />} />
        <Route path="/pmg15" element={<Pmg15 />} />
        <Route path="/pmg16" element={<Pmg16 />} />
        <Route path="/pmg17" element={<Pmg17 />} />
        <Route path="/pmg18" element={<Pmg18/>} />
        <Route path="/pmg19" element={<Pmg19/>} />
        <Route path="/pmg20" element={<Pmg20/>} />
        <Route path="/pmg21" element={<Pmg21/>} />
        <Route path="/pmg22" element={<Pmg22/>} />
        <Route path="/pmg23" element={<Pmg23/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}