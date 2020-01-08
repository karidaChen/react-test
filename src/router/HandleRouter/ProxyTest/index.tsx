import React from 'react';
import {Link} from 'react-router-dom';
import MyStore from '~/store/Mystore';

export default class ProxyTest extends React.Component {
  componentDidMount(): void {
    MyStore.sendRequest();
  }

  render(): React.ReactNode {
    return (
      <div className='center-text'>
        <h2>Router 1</h2>
        This is a proxy test!
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
