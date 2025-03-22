import { ModeToggle } from "@/components/ui/mode-toggle"
import { HoodieCard } from "@/components/store/hoodie-card"
import { Banner } from "@/components/store/banner"
import Footer from "@/components/store/footer"
import hoodies from "@/data/hoodies.json"

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <Banner />
      <section id="product-section" className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

