import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import Teams from './pages/Teams'
import Division from './pages/Division'
import Cars from './pages/Cars'
import Competitions from './pages/Competitions'
import Join from './pages/Join'
import Sponsors from './pages/Sponsors'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:key" element={<Division />} />
        <Route path="/car" element={<Cars />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/join" element={<Join />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Route>
    </Routes>
  )
}
