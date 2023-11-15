import { CSSProperties, ReactNode } from 'react';
import { getSearchQueryUrl } from '../route.utils';
import { SearchState } from '../models';
import { Link } from 'react-router-dom';

export function AppLink(props: {
  queryParams: SearchState;
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
