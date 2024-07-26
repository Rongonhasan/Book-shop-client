import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {title, price, description, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = useAxiosPublic();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success) {
            const bookItem = {
                title: data.title,
                price: parseFloat(data.price),
                description: data.description,
                image:res.data.data.display_url
                

            }
            const bookRes = await axiosSecure.patch(`/books/${_id}`, bookItem)
            console.log(bookRes.data);
            if(bookRes.data.modifiedCount > 0){
                // popup show
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is Updated to the Bookshop.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with img url ', res.data);
    }
    return (
        <div>
        <h2 className="text-3xl">Update Page</h2>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-6">
                  
                    <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Book Name*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={title}
                        placeholder="Book Name"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={price}
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                {/*  details */}
                <div className="form-control">
                    <label className="label">
                   
                        <span className="label-text">Book Details</span>
                    </label>
                   
                    <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn">
                    Update Book
                </button>
            </form>
        </div>
    </div>
    );
};

export default UpdateItem;