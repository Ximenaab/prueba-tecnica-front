import Swal from "sweetalert2"
import { deleteProducto } from "../services/productService"

function ProductCard({ producto, onDelete, onEdit }) {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás segura?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    })

    if (result.isConfirmed) {
      await deleteProducto(producto.id)
      Swal.fire("Eliminado!", "El producto fue eliminado.", "success")
      onDelete(producto.id)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold">{producto.nombre}</h2>
      <p className="text-gray-500 text-sm">{producto.categoria}</p>
      <p className="text-blue-600 font-semibold">${producto.precio}</p>
      <p className="text-gray-600 text-sm">Stock: {producto.stock}</p>
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onEdit(producto)}
          className="flex-1 bg-yellow-400 text-white py-1 rounded hover:bg-yellow-500"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default ProductCard