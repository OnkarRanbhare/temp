import { Link } from "react-router-dom";
import '../../css/Signup.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {

  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({firstName:"", lastName:"", email:"", phone:"", password:"", address:""})

  const signup = (e)=>{
    e.preventDefault()
    //axios.post
    navigate("/")
  }



  return (
    <div className="signup-wrapper d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="signup-form p-4 shadow rounded bg-white w-100" style={{ maxWidth: "450px" }}
        onSubmit={signup}
      >
        <h2 className="signup-title text-center mb-4 text-primary">Create Account</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input type="text" placeholder="First Name" className="signup-input form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <input type="text" placeholder="Last Name" className="signup-input form-control" />
          </div>
        </div>

        <input type="tel" placeholder="Phone Number" className="signup-input form-control mb-3" />

        <textarea  placeholder="Address" className="signup-input form-control mb-3" />

        <input type="email" placeholder="Email" className="signup-input form-control mb-3" />

        <input type="password" placeholder="Password" className="signup-input form-control mb-4" />

        <button type="submit" className="signup-button btn btn-primary w-100 mb-3"> Sign Up </button>

        <p className="login-text text-center">
          Already have an account?{' '}
          <Link to="/login" className="login-link text-decoration-none text-primary fw-semibold">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
