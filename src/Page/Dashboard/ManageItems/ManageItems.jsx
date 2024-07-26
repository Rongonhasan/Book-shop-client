import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookApis = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/books');
            return res.data;
        }
    });

    const handleDeleteBook = book => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/books/${book._id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'The book has been deleted.',
                            icon: 'success'
                        });
                    }
                });
            }
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading books.</div>;

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-2xl">All Books</h2>
                <h2 className="text-2xl">Total Books: {bookApis.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookApis.map((book, i) => (
                            <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                        <Link to={`/dashboard/updateItem/${book._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteBook(book)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <FaTrash className="text-red-700" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
