import { NavLink } from "react-router-dom"
import Logo from "../images/ustore.png"




function Header(props) {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={Logo} className="pic" alt="React Logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link " to="/Category" role="button"  aria-expanded="false"> Category</NavLink>
         
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ProductDetails" tabindex="-1">ProductDetails</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/carts" className="nav-link position-relative">
            Cart
            <span className="top-0 ms-3 translate-middle badge rounded-pill bg-danger">
              {props.cart.length}
            </span>
          </NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-primary text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header