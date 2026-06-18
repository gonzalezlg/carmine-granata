import { Outlet } from 'react-router-dom'
import Footer from '../components/navigation/Footer'
import Header from '../components/navigation/Header'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp'
import { WHATSAPP_URL } from '../config/contact'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp href={WHATSAPP_URL} />
    </div>
  )
}

export default MainLayout
