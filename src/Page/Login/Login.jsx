import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      Swal.fire({
        title: 'User Login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    navigate(from, { replace: true });
    })
  }
    return (
      <div className="hero w-full">
          
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          {/* <h1 className="text-3xl font-bold justify-center text-center">Login</h1> <br /> */}
          <br />
          <br />
         <img className='rounded-full h-[550px]' src="https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706433.jpg?t=st=1720266471~exp=1720270071~hmac=e9fde1c56fb4acf425bdde86d44f785f520a74b95f1c49f5342d099a5f5d9457&w=740" alt="" />
        </div>
       {/* log in page */}
    
       <form  onSubmit={handleLogin}
        className="card-body  rounded-2xl">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="email"  name="email" placeholder="email" className="input input-bordered" />
                  
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password"   name="password" placeholder="password" className="input input-bordered" />
                  
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
              </div>
              <div className="form-control mt-6">
                  <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
              {/* <div className="form-control mt-6">
                  <input  className="btn bg-red-600" type="submit" value="Goggle" />
              </div> */}
              <SocialLogin></SocialLogin>
              {/* <SocialLogin></SocialLogin> */}
              <p><small>New Here?<Link to="/signup">Create an account </Link>  </small></p>
          </form>
      </div>
    </div>
    );
};

export default Login;