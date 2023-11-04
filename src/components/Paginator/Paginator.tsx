import { useNavigate } from 'react-router-dom';
import { getSearchQueryUrl, useStateFromQuery } from '../../route.utils';
import { AppLink } from '../AppLink';

interface PaginatorParams {
  total: number;
}

const Paginator = (params: PaginatorParams) => {
  const queryParams = useStateFromQuery();
  console.log('Query params in paginator', queryParams);
  console.log('Page', queryParams.page);
  const navigate = useNavigate();

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const itemsPerPage = parseInt(event.target.value, 10);
    navigate(
      getSearchQueryUrl({
        ...queryParams,
        itemsPerPage: itemsPerPage,
        page: 0,
      })
    );
  };

  return (
    <div className="paginator">
      <div>
        Show
        <select
          value={queryParams.itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        {queryParams.itemsPerPage} results of {params.total}
      </div>
      {queryParams.page >= 1 ? (
        <AppLink
          queryParams={{
            ...queryParams,
            page: queryParams.page - 1,
          }}
        >
          <span>⬅️prev</span>
        </AppLink>
      ) : (
        <span className="grayscale">⬅️prev</span>
      )}
      {queryParams.page <= params.total ? (
        <AppLink
          queryParams={{
            ...queryParams,
            page: queryParams.page + 1,
          }}
        >
          <span>next➡️</span>
        </AppLink>
      ) : (
        <span className="grayscale"> next➡️</span>
      )}
    </div>
  );
};

export default Paginator;
