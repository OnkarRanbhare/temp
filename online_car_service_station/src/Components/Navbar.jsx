import { NavLink } from "react-router-dom";
import '../css/Navbar.css'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold text-primary" to="/">Wheelo</NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/view-services">View Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
              
              <li className="nav-item"><NavLink className="nav-link" to="/manage-services">Manage Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/manage-bookings">Manage Bookings</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/spare-parts">Spare Parts</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/manage-customers">Customers</NavLink></li>
              {/* <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li> */}
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <NavLink className="btn btn-outline-primary" to="/profile">Profile</NavLink>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item mb-2"><NavLink className="nav-link" to="/" data-bs-dismiss="offcanvas">Home</NavLink></li>
            <li className="nav-item mb-2"><NavLink className="nav-link" to="/view-services" data-bs-dismiss="offcanvas">View Services</NavLink></li>
            <li className="nav-item mb-2"><NavLink className="nav-link" to="/my-bookings" data-bs-dismiss="offcanvas">My Bookings</NavLink></li>
            <li className="nav-item mb-2"><NavLink className="nav-link" to="/about" data-bs-dismiss="offcanvas">About Us</NavLink></li>
            <li className="nav-item mt-3"><NavLink className="btn btn-primary w-100" to="/profile" data-bs-dismiss="offcanvas">Profile</NavLink></li>
            
            





            

            
          </ul>
        </div>
      </div>
    </>
  );
}
