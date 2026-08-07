import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
