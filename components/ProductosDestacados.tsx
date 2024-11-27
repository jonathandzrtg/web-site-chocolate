import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const productos = [
  { nombre: "Trufa Oscura", descripcion: "Trufas de chocolate negro ricas e intensas", precio: "12,99€" },
  { nombre: "Caramelo con Leche", descripcion: "Chocolate con leche suave con caramelo pegajoso", precio: "10,99€" },
  { nombre: "Frambuesa Blanca", descripcion: "Chocolate blanco cremoso con frambuesa ácida", precio: "11,99€" },
]

export default function ProductosDestacados() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productos.map((producto, index) => (
          <Card key={index} className="bg-amber-100">
            <CardHeader>
              <CardTitle>{producto.nombre}</CardTitle>
              <CardDescription>{producto.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-amber-200 rounded-md mb-4"></div>
              <p className="text-2xl font-bold text-amber-800">{producto.precio}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Añadir al Carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

