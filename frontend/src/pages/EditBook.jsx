import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import Theme from '../components/Theme'

const EditBook = () => {

  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.book.author);
        setTitle(response.data.book.title);
        setPublishYear(response.data.book.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // alert("something wrong happened, try again please!")
        enqueueSnackbar('Something wrong happened, try again please!', { variant: 'error' })
        console.log(error)
      });
  }, [])
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variatn: 'success' })
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened, please check again!");
        enqueueSnackbar('error', { variant: 'error' })
        console.log(error);
      });
  };


  return (
    <div className="p-4 dark:bg-slate-800">
      <BackButton />
      <Theme />
      <h1 className="text-3xl my-4 dark:text-white">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-gray-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 py-1 text-gray-500 dark:text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 vorder-gray-500 px-4 py-2 w-full dark:text-slate-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-white py-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 vorder-gray-500 px-4 py-2 w-full dark:text-slate-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-white py-1">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 vorder-gray-500 px-4 py-2 w-full dark:text-slate-900"
          />
        </div>
        <button className="p-1 bg-sky-300 m-0 mt-3 w-full" onClick={handleEditBook}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default EditBook