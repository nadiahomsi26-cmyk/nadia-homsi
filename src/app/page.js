import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MethodologySection from '@/components/sections/MethodologySection'
import VisionSection from '@/components/sections/VisionSection'
import CTASection from '@/components/sections/CTASection'
import InstagramSection from '@/components/sections/InstagramSection'
import SessionsSection from '@/components/sections/SessionsSection'
import PartnersSection from '@/components/sections/PartnersSection'
import TestimonySection from '@/components/sections/TestimonySection'
import CoursesSectionCloudinary from '@/components/sections/CoursesSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <SessionsSection />
      <VisionSection />
      <CoursesSectionCloudinary />
      <PartnersSection />
      <InstagramSection />
      <TestimonySection />
      <CTASection />
      <Footer />
    </main>
  )
}
