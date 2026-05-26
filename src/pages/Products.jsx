import { useState, useEffect } from "react"
import { getProductos } from "../services/productService"
import ProductCard from "../components/ProductCard"

function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    cargarProductos()
  }, [])

  const cargarProductos = async () => {
    setLoading(true)
    const data = await getProductos()
    setProductos(data)
    setLoading(false)
  }

  const handleDelete = (id) => {
    setProductos(productos.filter(p => p.id !== id))
  }

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventario</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Nuevo Producto
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        className="w-full border p-2 rounded mb-6"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-lg">Cargando productos...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productosFiltrados.map(producto => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onDelete={handleDelete}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Productos