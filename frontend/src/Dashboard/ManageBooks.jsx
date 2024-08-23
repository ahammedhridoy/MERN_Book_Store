/* eslint-disable no-unused-vars */
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-books`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllBooks(data);
      });
  }, []);

  // delete a books
  const handleDelete = (id) => {
    // console.log(id)
    const response = fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setAllBooks(data);
      });

    console.log(response);

    if (response.status === 200) {
      alert("Book deleted successfully");
      window.location.reload();
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manager Your Books Inventory!</h2>

      {/* table */}

      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>{book.bookPrice}</Table.Cell>
              <Table.Cell>
                <Link
                  className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button
                  className="px-4 py-1 font-semibold text-white bg-red-600 rounded-sm hover:bg-sky-600"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>

      {/* pagination
      <div className="flex items-center justify-center mt-8 text-center">
        <Pagination
          currentPage={1}
          layout="pagination"
          nextLabel="Go forward"
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          previousLabel="Go back"
          showIcons
          totalPages={1000}
        />
      </div> */}
    </div>
  );
};

export default ManageBooks;
