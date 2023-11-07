import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <HomePage />
        <Footer />
      </ErrorBoundary>
    );
  }
}
