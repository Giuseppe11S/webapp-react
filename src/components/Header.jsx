
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        {/* {navbar} */}
        <nav>
          <div className="cnt-nav">
            <Link>Movie's road</Link>
          </div>
        </nav>
      </header>
    </>
  )
}