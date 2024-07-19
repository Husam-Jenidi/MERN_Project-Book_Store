import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import Theme from '../components/Theme';
const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.
      get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, [id]);
  if (loading) { return <Spinner /> }
  if (!book) { return <div>No book found</div> }
  return (
    <div className="p-4 dark:bg-slate-800">
      <BackButton />
      <Theme />
      <h1 className="text-3xl my-4 dark:text-white">Show Book</h1>
      {loading ?
        (<Spinner />

        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 dark:bg-slate-800">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Id</span>
              <span className="dark:text-slate-300">{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Title</span>
              <span className="dark:text-slate-300">{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Author</span>
              <span className="dark:text-slate-300">{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Publish Year</span>
              <span className="dark:text-slate-300">{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Create Time</span>
              <span className="dark:text-slate-300">{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">Last Update Time</span>
              <span className="dark:text-slate-300">{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}

    </div>
  )
}

export default ShowBook