import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bookImg from '/book-gif.svg';
import magnifyingGlassIcon from '/magnifying-glass-svgrepo-com.svg';
import binocularsIcon from '/Binoculars.svg';
import libraryImg from '/BannerImg.svg';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="wrapper main-container-hight flex items-center">
      <div className="flex w-full justify-around items-center">
        <div className="search-box w-1/3 relative">
          <div className="relative">
            <h1 className="text-gray-800 h1">What book are you looking for?</h1>
            <img
              className="book-img w-24 absolute top-10 right-0"
              src={bookImg}
              alt="book icon"
            />
          </div>
          <p className="p mt-8 mb-6">
            Explore our catalog and find your next read.
          </p>
          <div className="relative">
            <input
              className="border-2 border-gray-800 w-full p-1 pl-3 rounded-3xl text-xs mb-8 relative z-10"
              type="text"
              placeholder="Type the name of book..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-shadow w-full p-1 pl-3 rounded-3xl text-xs mb-8 bg-yellow-500 h-5 absolute top-3"></div>
            <span>
              <img
                className="absolute right-2 top-1 z-10"
                src={magnifyingGlassIcon}
                alt="Magnifying glass icon"
              />
            </span>
          </div>
          <span className="flex justify-evenly items-center">
            <Link
              to={!searchTerm ? '' : `/search/${searchTerm}`}
              className="flex flex-wrap border-2 border-gray-800 p-1 rounded-xl bg-yellow-400 text-xs w-1/3 h-9 justify-around items-center"
            >
              Explore
              <img className="w-5" src={binocularsIcon} alt="" />
            </Link>
            <div className="line w-2/3 ml-10"></div>
          </span>
        </div>
        <div className="search-image w-1/4">
          <img src={libraryImg} alt="library image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
