import { CSSProperties, ReactNode } from 'react';
import { SearchQueryParams, getSearchQueryUrl } from '../route.utils';
import { Link } from 'react-router-dom';

export function AppLink(props: {
  queryParams: SearchQueryParams;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
}) {
  return (
    <Link
      className={props.className}
      style={props.style}
      to={getSearchQueryUrl(props.queryParams)}
    >
      {props.children}
    </Link>
  );
}
