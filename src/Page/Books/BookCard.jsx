import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link , useNavigate, useLocation} from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const BookCard = ({bookApi}) => {
    const {title,price,image,description, _id} = bookApi;
    const short = description ? description.slice(0, 100) + "......." : "";
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch]= useCart();



    const handelAddToCart = book => {
        if(user && user.email) {
            // todo
            
            const carItem ={
              bookId : _id,
              email: user.email,
              title,
              price,
              image
            }
            axiosSecure.post('/carts', carItem)
            .then(res => {
              console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${title} added successfully to your cart`,
                  showConfirmButton: false,
                  timer: 1500
                });
                refetch();
              }
            })
        }
        else{
            Swal.fire({
                title: "You Are Not Login",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 my-6 ml-9 mt-10  border border-gray-200 rounded-lg">
           <figure>
           <PhotoProvider>
              <PhotoView src={image}>
                <img className='w-full mt-15 h-72 rounded-md object-cover'
                  src={image}
                  style={{ objectFit: "cover" }}
                  alt=""/>
              </PhotoView>
            </PhotoProvider>
           </figure>
           <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
               
               <p>{short}</p>
               <div className="card-actions justify-end">

                   <Link>
                       <button onClick={()=> handelAddToCart(bookApi)} className="btn btn-primary">Add To Cart</button>
                   </Link>
                   
                  
               </div>
           </div>
       </div>
       <div>
      
       </div>
      </div>
    );
};

export default BookCard;