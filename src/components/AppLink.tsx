import { CSSProperties, ReactNode } from 'react';
import { SearchState } from '../models';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';

export function AppLink(props: {
  queryParams: SearchState;
  action: Action;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={props.className}
      style={props.style}
      onClick={() => dispatch(props.action)}
    >
      {props.children}
    </button>
  );
}
