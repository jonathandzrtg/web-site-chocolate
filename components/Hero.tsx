import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Deléitate con Chocolates de Lujo</h1>
        <p className="text-xl mb-8">Experimenta los ricos sabores de nuestros chocolates artesanales</p>
        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
          Explora Nuestra Colección
        </Button>
      </div>
    </section>
  )
}

