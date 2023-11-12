import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppLink } from './AppLink';

test('AppLink', () => {
  console.log('Hello world');
  expect(true).toBe(true);
  const result = render(
    <AppLink
      queryParams={{
        itemsPerPage: 69,
        page: 42,
        searchTerm: 'foo',
        bookId: 'bar',
      }}
    />
  );
});
