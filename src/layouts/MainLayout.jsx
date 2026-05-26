import { useNavigate } from "react-router-dom"

function MainLayout({ children }) {
  const navigate = useNavigate()
  const usuario = localStorage.getItem("usuario")

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div>
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Panel Admin</h1>
        <div className="flex items-center gap-4">
          <span>Hola, {usuario}!</span>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}

export default MainLayout