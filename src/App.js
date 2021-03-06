import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/my-movie-crud" component={MovieList} />
        <Route path="/my-movie-crud/movies/new" component={NewMovie} />
        <Route path="/my-movie-crud/movies/:id/edit/" component={EditMovie} />
        <Route
          exact
          path="/my-movie-crud/movies/:id"
          component={MovieDetails}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
