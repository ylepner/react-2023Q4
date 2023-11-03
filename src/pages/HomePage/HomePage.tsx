import React, { useState, useEffect, useCallback } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookInfo, BooksResponse } from '../../api.models';
import './HomePage.css';
import { data as defaultData } from '../../data';
import { getQueryUrl } from '../../api.utils';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  const [searchResults, setSearchResults] = useState<BookInfo[]>(defaultData);
  const [isListStatus, setIsListStatus] = useState<
    'all' | 'trends' | 'results'
  >('trends');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const onSearch = useCallback(
    async (searchTerm?: string) => {
      let url = getQueryUrl(searchTerm || '', currentPage, itemsPerPage);
      console.log(url);
      localStorage.setItem('searchTerm', searchTerm || '');
      if (searchTerm === '') {
        url = getQueryUrl('', currentPage);
        setIsListStatus('all');
      } else {
        setIsListStatus('results');
      }
      setIsLoading(true);
      setSearchTerm(searchTerm ?? '');
      try {
        const result = await fetch(url);
        const data: BooksResponse = await result.json();
        setSearchResults(
          data.docs.map((doc) => ({
            key: doc.key,
            title: doc.title,
            cover_i: doc.cover_i || undefined,
            author_name: doc.author_name || [],
          }))
        );
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    if (searchTerm) {
      onSearch(searchTerm);
    }
  }, [searchTerm, currentPage, onSearch]);

  useEffect(() => {
    onSearch(searchTerm);
  }, [itemsPerPage]);

  const getHeader = (): React.ReactNode => {
    if (isLoading) {
      return <>Loading...</>;
    }
    if (isListStatus === 'trends') {
      return <>Trending books</>;
    }
    return (
      <>
        {searchTerm ? (
          <span>Results for &apos;{searchTerm}&apos;</span>
        ) : (
          <>All books</>
        )}
      </>
    );
  };

  return (
    <div className="wrapper">
      <div className="flex h-1/3">
        <SearchPanel onSearch={onSearch} searchTerm={searchTerm} />
      </div>
      <h2 className="pt-20 pb-8 text-center">{getHeader()}</h2>
      <div className="card-list flex justify-center flex-col text-center">
        <div className="items-per-page pt-6">
          <label className="pr-2" htmlFor="items_number">
            Books per page
          </label>
          <input
            className="input-per-page pl-3 border-1 border-gray-500 border-solid rounded-lg text-center w-12"
            type="number"
            id="items_number"
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            value={itemsPerPage}
          />
        </div>
        <BookCardList books={searchResults} searchTerm={searchTerm} />
      </div>
      <div className="pagination-buttons flex justify-center space-x-4">
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            console.log(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className={currentPage === 1 ? 'grayscale' : ''}
        >
          ⬅️ Previous
        </button>
        <div>{currentPage}</div>
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            console.log(currentPage + 1);
          }}
          disabled={searchResults.length === currentPage}
          className={searchResults.length === currentPage ? 'grayscale' : ''}
        >
          Next➡️
        </button>
      </div>
    </div>
  );
};

export default HomePage;
