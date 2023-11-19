import { useStateFromQuery } from '../../route.utils';
import { AppLink } from '../AppLink';
import { setPage } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsPerPage as setItemsPerPage } from '../../store/reducer';
import { StoreState } from '../../models';
import { useEffect } from 'react';

interface PaginatorParams {
  total: number;
}

const Paginator = (params: PaginatorParams) => {
  const queryParams = useStateFromQuery();
  const totalPages = Math.ceil(params.total / queryParams.itemsPerPage);
  const dispatch = useDispatch();
  const itemsPerPage = useSelector(
    (state: StoreState) => state.appState.search.itemsPerPage
  );
  const currentPage = useSelector(
    (state: StoreState) => state.appState.search.page
  );
  const searchTerm = useSelector(
    (state: StoreState) => state.appState.search.searchTerm
  );

  useEffect(() => {
    dispatch(setPage(0));
  }, [searchTerm, dispatch]);

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const itemsPerPage = parseInt(event.target.value, 10);
    dispatch(setItemsPerPage(itemsPerPage));
  };

  return (
    <div className="paginator flex flex-col text-center">
      <div className="paginator-options">
        Show
        <select
          className="border-2 rounded-md m-2 text-center"
          value={itemsPerPage}
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
          {currentPage >= 1 ? (
            <AppLink
              action={setPage(currentPage - 1)}
              queryParams={{
                ...queryParams,
                page: currentPage - 1,
              }}
            >
              <span>⬅️prev</span>
            </AppLink>
          ) : (
            <span className="grayscale">⬅️prev</span>
          )}
        </div>
        <div className="current-page text-center">{currentPage + 1}</div>
        <div className="pl-4">
          {currentPage + 1 < totalPages ? (
            <AppLink
              action={setPage(currentPage + 1)}
              queryParams={{
                ...queryParams,
                page: currentPage + 1,
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
