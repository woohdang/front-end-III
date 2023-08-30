import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/home" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/faqs" className="link">Faqs</Link>
      </nav>
     </header>
  )
}

export default Navbar
































































/* Realizado por Github @woohdang 2023*/