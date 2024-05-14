import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { authRoutes, RouteType } from '@/routes'
import Dev from '@/pages/dev'
import InputDev from '@/pages/test'

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') navigate('/login')
  }, [navigate, pathname])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return (
    <div>
      <Routes>
        {authRoutes.map((route: RouteType, index: number) => {
          return <Route key={index} path={route.path} element={route.element} />
        })}
        {/*Add your routes here*/}
        <Route path={'/dev'} element={<Dev />} />
        <Route path={'/input'} element={<InputDev />} />
      </Routes>
    </div>
  )
}

export default App
