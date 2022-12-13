import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // map through all the books and pass props to <BookShow />
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  // render to the page all books & their respective CRUD
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
