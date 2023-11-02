import React, { useState, useEffect, useCallback } from 'react';
import SearchPanel from './components/SearchPanel/SearchPanel';
import BookCardList from './components/BookCardList/BookCardList';
import { BookInfo, BooksResponse } from './components/BookCard/models';
import './HomePage.css';
import { data as defaultData } from '../../data';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem('searchTerm') || ''
  );
  const [searchResults, setSearchResults] = useState<BookInfo[]>(defaultData);
  const [isListStatus, setIsListStatus] = useState<
    'all' | 'trends' | 'results'
  >('trends');
  const [rendererError, setRendererError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onSearch = useCallback(
    async (searchTerm?: string) => {
      let url = getQueryUrl(searchTerm || '', currentPage);
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

  const throwError = (): React.ReactNode => {
    throw new Error('Error from renderer');
  };

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
      <button
        className="border-2 border-gray-800 p-2 rounded-3xl mb-8 bg-red-500"
        onClick={() => setRendererError(true)}
      >
        Throw error
      </button>
      {rendererError && <div>{throwError()}</div>}
      <div className="flex h-1/3">
        <SearchPanel onSearch={onSearch} searchTerm={searchTerm} />
      </div>
      <h2 className="pt-20 pb-8 text-center">{getHeader()}</h2>
      <div className="card-list flex justify-center">
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

function getQueryUrl(searchTerm: string, currentPage: number) {
  if (searchTerm) {
    return `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=10&page=${currentPage}&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  } else {
    return `https://openlibrary.org/search.json?q='all'&${currentPage}_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  }
}

export default HomePage;
