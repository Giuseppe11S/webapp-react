
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        {/* {navbar} */}
        <nav className="cnt-nav">
            <Link to="/" id="nav-logo">Movie's road</Link>
        </nav>
      </header>
    </>
  )
}