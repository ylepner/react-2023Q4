import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import { BrowserRouter } from 'react-router-dom';

test('AppLink', () => {
  console.log('Hello world');
  expect(true).toBe(true);
  const result = render(
    <BrowserRouter>
      <AppLink
        queryParams={{
          itemsPerPage: 69,
          page: 42,
          searchTerm: 'foo',
          bookId: 'bar',
        }}
      />
    </BrowserRouter>
  );
  const link = result.getByRole('link');
  expect(link.getAttribute('href')).toBe(
    '/search/foo/details/bar?page=42&count=69'
  );
});
