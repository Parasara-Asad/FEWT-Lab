import Navs from './Navs'
import { Outlet } from 'react-router-dom'

function Layout2() {
  return (
    <>
      <Navs/>
      <Outlet/>
    </>
  )
}

export default Layout2
