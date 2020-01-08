import React from 'react';
import HandleNumber from './HandleNumber';
import HandleRouter from './HandleRouter';
import ImageDrag from './ImageDrag';
import './index.scss';

function Main(): React.ReactNode {
  return (
    <div className='jiajie-project'>
      <h1>Welcome to Pheobe &apos; s home</h1>
      <HandleNumber />
      <HandleRouter />
      <ImageDrag />
    </div>

  );
}

export default Main;
