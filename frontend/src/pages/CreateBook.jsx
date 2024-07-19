import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import Theme from '../components/Theme'
const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully', { variant: 'success' })
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert("An error happened, please check again!");
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };


  return (
    <div className="p-4 dark:bg-slate-800 dark:text-white">
      <BackButton />
      <Theme />
      <h1 className="text-3xl my-4">CreateBook</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-gray-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-800 dark:text-white py-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-1 w-full dark:text-slate-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 py-10 dark:text-white">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-1 w-full dark:text-slate-900"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-white">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 my-1 w-full dark:text-slate-900"
          />
        </div>
        <button className="p-1 bg-sky-500 mt-5 h-[50px] dark:text-white w-full" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook