import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundaryStyles'

class ErrorBoundary extends React.Component {

  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/Oqnene0.png' />
          <ErrorImageText>Sorry! This page is in garbage.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;