import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './ErrorBoundary';
export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    );
  }
}
