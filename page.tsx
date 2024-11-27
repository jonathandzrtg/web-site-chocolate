import Hero from './components/Hero'
import ProductosDestacados from './components/ProductosDestacados'
import SobreNosotros from './components/SobreNosotros'
import FormularioContacto from './components/FormularioContacto'

export default function Inicio() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Hero />
      <ProductosDestacados />
      <SobreNosotros />
      <FormularioContacto />
    </main>
  )
}

