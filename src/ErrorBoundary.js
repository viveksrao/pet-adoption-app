import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary Caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({
        redirect: true
      }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1 className="display-2 text-danger">There was an error with this listing.</h1>
          <p className="lead"><Link to="/">Click Here</Link> to go back to the Home Page or wait five seconds.</p>
        </div>
      );
    }
    return this.props.children;
  }

}

export default ErrorBoundary;