import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import AboutSection from '../components/AboutSection';
import HistoryTimeline from '../components/HistoryTimeline';
import OfferingsGrid from '../components/OfferingsGrid';
import TreatmentBlocks from '../components/TreatmentBlocks';
import StatsSection from '../components/StatsSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import LoyalGuestSpotlight from '../components/LoyalGuestSpotlight';
import GalleryGrid from '../components/GalleryGrid';
import CTABanner from '../components/CTABanner';
import ContactSection from '../components/ContactSection';
import HeritageDivider from '../components/HeritageDivider';
import DayAtChamundi from '../components/DayAtChamundi';
import RoomsSection from '../components/RoomsSection';
import AwardSection from '../components/AwardSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Chamundi Hill Palace | Heritage Ayurveda Retreat in Kerala</title>
        <meta name="description" content="Reconnect with nature and balance at Chamundi Hill Palace, Kerala's heritage Ayurvedic retreat specializing in Panchakarma and holistic healing." />
      </Helmet>
      <HeroSection />
      <TrustBadges />
      <OfferingsGrid />
      <AboutSection />
      <HeritageDivider />
      <HistoryTimeline />
      <AwardSection />
      <HeritageDivider />
      <DayAtChamundi/>
      <TreatmentBlocks />
      <RoomsSection/>
      <HeritageDivider />
      <StatsSection />
      <TestimonialsCarousel />
      <LoyalGuestSpotlight />
      <GalleryGrid />
      <CTABanner />
      <ContactSection />
    </>
  );
}
