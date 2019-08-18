import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    return this.state.hasError ? <div>Something went wrong.</div> : this.props.children;
  }
}

export default ErrorBoundary;
