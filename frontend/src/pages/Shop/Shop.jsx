import { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

export default function Shop() {
  const { loading } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const handleAddToCart = (bookId, price) => {
    dispatch(
      addToCart({
        productId: bookId,
        quantity: 1,
        price,
      })
    );
  };

  // fetching data
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loading]);

  // loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div className="px-4 my-28 lg:px-24">
      <h2 className="z-40 mb-16 text-3xl font-bold text-center">
        All Books are Available Here
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book._id}>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p className="line-clamp-4">{book.bookDescription}</p>
            </p>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p className="line-clamp-4">${book.bookPrice}</p>
            </p>

            <button
              onClick={() => handleAddToCart(book._id, book.bookPrice)}
              className="px-4 py-2 text-white bg-blue-600 rounded"
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
