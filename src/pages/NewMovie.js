import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { shouldRedirect: false };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    const { teste } = this.state.shouldRedirect;
    if (teste) return <Redirect to="my-movie-crud/" />;
    return <MovieForm onSubmit={this.handleSubmit} />;
  }
}
export default NewMovie;
