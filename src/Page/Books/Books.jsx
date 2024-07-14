import { useEffect, useState } from "react";
import BookCard from "./BookCard";



const Books = () => {

    const [bookApis, setBookApi ] = useState([]);
    useEffect(()=> {
       fetch('http://localhost:5000/books')
       .then(response => response.json())
      .then(data => setBookApi(data))

    },[])
    
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* <h1>{bookApis.length}</h1> */}
        {
            bookApis.map(bookApi => <BookCard
               key={bookApi._id}
                bookApi={bookApi}
            >           
            </BookCard>)
        }
    </div>
    );
};

export default Books;