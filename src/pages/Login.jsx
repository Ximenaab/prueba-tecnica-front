import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [usuario, setUsuario] = useState("")
  const [pin, setPin] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!usuario || !pin) {
      alert("Por favor completa todos los campos")
      return
    }
    localStorage.setItem("usuario", usuario)
    navigate("/productos")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
        <input
          type="text"
          placeholder="Usuario"
          className="w-full border p-2 rounded mb-4"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN"
          className="w-full border p-2 rounded mb-6"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Login