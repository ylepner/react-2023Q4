import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (searchTerm) {
      onSearch(searchTerm);
    }
  }, [searchTerm]);

  const onSearch = async (searchTerm?: string) => {
    let url = getQueryUrl(searchTerm || '');
    localStorage.setItem('searchTerm', searchTerm || '');
    if (searchTerm === '') {
      url = getQueryUrl('');
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
  };

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
        <BookCardList books={searchResults} />
      </div>
    </div>
  );
};

function getQueryUrl(searchTerm: string) {
  if (searchTerm) {
    return `https://openlibrary.org/search.json?q=${searchTerm}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  } else {
    return `https://openlibrary.org/search.json?q='all'&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`;
  }
}

export default HomePage;
