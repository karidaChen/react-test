import React from 'react';
import {Button} from '@enos/dpl';
import {Link} from 'react-router-dom';
import './index.scss';


function Router(): React.ReactElement {
  return (
    <div className='jiajie-project-handle-router'>
      <h2>Try Different Router</h2>
      <Button>
        <Link to='/router/proxTest' className='router'>
          route1
        </Link>
      </Button>
      <Button>
        <Link to='/router/routeTest' className='router'>
          route2
        </Link>
      </Button>
    </div>
  );
}

export default Router;
