import { StoreProvider } from '@/context/StoreContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Categories } from '@/components/sections/Categories'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { EditorialBanners } from '@/components/sections/EditorialBanners'
import { TrendingCarousel } from '@/components/sections/TrendingCarousel'
import { FeaturedCollection } from '@/components/sections/FeaturedCollection'
import { Lookbook } from '@/components/sections/Lookbook'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { Newsletter } from '@/components/sections/Newsletter'
import { CartDrawer } from '@/components/overlays/CartDrawer'
import { QuickViewDialog } from '@/components/overlays/QuickViewDialog'
import { SearchDialog } from '@/components/overlays/SearchDialog'

export default function App() {
  return (
    <StoreProvider>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductsGrid />
        <EditorialBanners />
        <TrendingCarousel />
        <FeaturedCollection />
        <Lookbook />
        <InstagramSection />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewDialog />
      <SearchDialog />
    </StoreProvider>
  )
}
