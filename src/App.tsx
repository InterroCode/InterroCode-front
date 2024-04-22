import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { authRoutes, RouteType } from '@/routes'

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
      </Routes>
      {/*<Route*/}
      {/*  path={"/dev/sample"}*/}
      {/*  element={*/}
      {/*      <DashboardLayout>*/}
      {/*          <DevSample />*/}
      {/*      </DashboardLayout>*/}
      {/*  }*/}
      {/*/>*/}
    </div>
  )
}

export default App
