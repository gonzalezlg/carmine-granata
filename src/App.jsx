import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/navigation/ScrollToTop'
import BodegaPage from './pages/BodegaPage'
import ContactoPage from './pages/ContactoPage'
import ExperienciasPage from './pages/ExperienciasPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import VinosPage from './pages/VinosPage'

const routerBasename =
  import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="bodega" element={<BodegaPage />} />
          <Route path="vinos" element={<VinosPage />} />
          <Route path="experiencias" element={<ExperienciasPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
