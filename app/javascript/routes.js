import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer'
import MovieContainer from './containers/MovieContainer'
import MovieShowContainer from './containers/MovieShowContainer'


const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={HomeContainer}/>
          <Route path='movies/:id' component={MovieShowContainer} />
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
