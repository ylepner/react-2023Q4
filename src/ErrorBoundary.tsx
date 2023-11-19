import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<object, ErrorBoundaryState> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-6xl text-center text-yellow-500">
            Oopos! <br /> This book cannot be displayed properly.
          </div>
        </div>
      );
    }

    return (this.props as React.PropsWithChildren<object>).children;
  }
}
export default ErrorBoundary;
