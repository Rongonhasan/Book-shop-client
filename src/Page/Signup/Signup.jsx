import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import axios from "axios";

const SignUp = () => {
     const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
     const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        
         createUser (data?.email,data?.password)
      
         .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             console.log(user)
             // ...
           })
    //   updateUserProfile(data.name , data.photo)
    //   .then(() =>{
    //     console.log("user profile update info")
    //     const userInfo = 
        axios.post('http://localhost:5000/users', {
            name : data.name,
            email : data.email,
        })
        .then(res => {
            console.log(res.data + 'mongdb save');
            if(res.data.insertedId) {
                console.log('user add data base')
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }
       
    })
   
    } 

   

    return (
        <>    
        <div className="hero w-full">
          
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-3xl font-bold justify-center text-center">Signup now!</h1> <br /> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
         
           <img className='rounded-full mt-0' src="https://img.freepik.com/free-photo/sign-up-user-password-privacy-concept_53876-123680.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user" alt="" />
          </div>
         {/* log in page */}
          
         <form onSubmit={handleSubmit(onSubmit)}
          className="card-body  rounded-2xl">
            <h1 className="text-2xl font-bold justify-center text-center">Signup now!</h1> 
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" {...register("name",{ required: true })}  name="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email",{ required: true })}  name="email" placeholder="email" className="input input-bordered" />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password",{ 
                         required: true,
                         minLength: 6,
                         maxLength: 20,
                         pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                     })}    name="password" placeholder="password" className="input input-bordered" />
                     {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input  className="btn btn-primary" type="submit" value="SignUp" />
                </div>
               
                <SocialLogin></SocialLogin>
                <p><small><Link to="/login">Already Have An Account Login Now </Link>  </small></p>
            </form>
        </div>
      </div>
      </>
    );
};

export default SignUp;