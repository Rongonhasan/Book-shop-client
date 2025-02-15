import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }

            axiosPublic.post('/users', userInfo)
            .then (res => {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
             <div className="form-control mt-6">
                  
                  <button onClick={handleGoogleSignIn}
                   className="btn bg-red-600">
                     <FaGoogle></FaGoogle>
                      Goggle</button>
              </div>
        </div>
    );
};

export default SocialLogin;