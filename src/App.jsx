import React from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact, { contactData } from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';
import { getApiData } from './APIs/ApiData';
import { getMovieDetails } from './APIs/MovieDetails';
import MovieDetails from './pages/MovieDetails';
import MovieAxios from './axios/MovieAxios';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData
        },
        {
          path: "/movie/fetch",
          element: <Movie />,
          loader:getApiData,
        },
        {
          path: "/movie/axios",
          element: <MovieAxios />,
          loader:getApiData
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails
        }
      ]
    },
  
  ])

  return <RouterProvider router={router} />
};

export default App;