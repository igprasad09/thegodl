import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import './index.css'
import Programs from './pages/programs'
import Pmg1 from './programs/pmg1'

export default function App() {
  return (
    <div>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/chat" element={<Chat/>} />

        <Route path="/pmg1" element={<Pmg1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}