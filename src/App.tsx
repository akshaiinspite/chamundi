import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AyurvedaPage from './pages/AyurvedaPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import AccommodationPage from './pages/AccommodationPage';
import PanchakarmaPage from './pages/PanchakarmaPage';
import YogaCoursePage from './pages/YogaCoursePage';
import GalleryPage from './pages/GalleryPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import Preloader from './components/PreLoader';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Preloader />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ayurveda" element={<AyurvedaPage />} />
            <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/panchakarma" element={<PanchakarmaPage />} />
            <Route path="/yoga-course" element={<YogaCoursePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
          </Routes>

          <Footer />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/9447870346"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:scale-110 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} className="text-white" />
          </a>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
