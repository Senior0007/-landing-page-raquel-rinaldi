import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ServicePage from './pages/ServicePage.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a1628]">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
