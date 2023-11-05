import { useNavigate } from 'react-router-dom';
import { getSearchQueryUrl, useStateFromQuery } from '../../route.utils';
import { AppLink } from '../AppLink';

interface PaginatorParams {
  total: number;
}

const Paginator = (params: PaginatorParams) => {
  const queryParams = useStateFromQuery();
  const navigate = useNavigate();
  const totalPages = Math.ceil(params.total / queryParams.itemsPerPage);

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
    <div className="paginator flex flex-col text-center">
      <div className="paginator-options">
        Show
        <select
          className="border-2 rounded-md m-2 text-center"
          value={queryParams.itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        results of {params.total}
      </div>
      <div className="paginator-buttons flex justify-center p-5">
        <div className="pr-4">
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
        </div>
        <div className="current-page text-center">{queryParams.page + 1}</div>
        <div className="pl-4">
          {queryParams.page + 1 < totalPages ? (
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
      </div>
    </div>
  );
};

export default Paginator;
