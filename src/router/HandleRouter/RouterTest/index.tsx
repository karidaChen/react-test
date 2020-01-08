import React from 'react';
import {Link} from 'react-router-dom';

export default class RouteTest extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='center-text'>
        <h2>Router 2</h2>
       This is a router test!
        <p className='nav-back'>
          <Link to='/'>
            <i className='dpl20_back_s' />
            <span>Back</span>
          </Link>
        </p>
      </div>
    );
  }
}
