import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FormularioContacto() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block mb-2 font-medium">Nombre</label>
            <Input id="nombre" placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Correo electrónico</label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block mb-2 font-medium">Mensaje</label>
            <Textarea id="mensaje" placeholder="Tu mensaje" className="h-32" />
          </div>
          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">Enviar Mensaje</Button>
        </form>
      </div>
    </section>
  )
}

