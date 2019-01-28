

import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';


class NotFoundPage extends React.Component {
  render () {
    return(
      <div className="jumbotron">
      <h1>Ups.. </h1>
      <h1>This Page is Not Found.</h1>
      <Link to="/" className="btn btn-info">Bact to Home Page</Link>


      </div>
    );
  }

}

export default NotFoundPage;
