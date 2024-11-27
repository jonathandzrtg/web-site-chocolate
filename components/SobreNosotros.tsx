export default function SobreNosotros() {
  return (
    <section className="py-16 px-4 bg-amber-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestra Trayectoria en el Chocolate</h2>
        <p className="text-lg mb-8">
          Fundada en 1995, nuestra pasión por crear chocolates exquisitos nos ha llevado a convertirnos en uno de los chocolateros más reconocidos del mundo. Utilizamos solo los granos de cacao y los ingredientes más finos para elaborar nuestros chocolates de lujo, asegurando que cada bocado sea una experiencia inolvidable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Artesanía</h3>
            <p>Cada chocolate es elaborado a mano por nuestros maestros chocolateros</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Abastecimiento Sostenible</h3>
            <p>Trabajamos directamente con los agricultores de cacao para garantizar prácticas éticas</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovación</h3>
            <p>Constantemente exploramos nuevos sabores y técnicas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

