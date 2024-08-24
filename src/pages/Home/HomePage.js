import { HeroSection } from '../Home/components/HeroSection';
import { Faq } from './components/Faq';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import { useTitles } from "../../hooks/useTitles";

export const HomePage = () => {
  useTitles("Access Latest Computer Science eBooks")

  return (
    <main>
        <HeroSection />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
