import React from 'react';
import './index.scss';
import {message} from '@enos/dpl';

export default function ImageDrag(): React.ReactElement {
  const onDragStart = (e): void => {
    e.dataTransfer.setData('img', e.target.id);
  };

  const onDragOver = (e): void => {
    e.preventDefault();
  };

  const onDrop = (e): void => {
    e.preventDefault();
    const data = e.dataTransfer.getData('img');
    e.target.appendChild(document.getElementById(data));
    message.success('Move Successfully!');
  };

  return (
    <div className='jiajie-project-handle-image'>
      <h2>Drag The Picture To Other Box</h2>
      <div className='handle-image'>
        <span
          className='image-box'
          onDrop={(e): void => onDrop(e)}
          onDragOver={(e): void => onDragOver(e)}
        >
          <img
            id='girl'
            src={require('~/asset/image/girl.jpg')}
            alt='girl'
            onDragStart={(e): void => onDragStart(e)}
          />
        </span>

        <span
          className='image-box'
          onDrop={(e): void => onDrop(e)}
          onDragOver={(e): void => onDragOver(e)}
        />
      </div>
    </div>
  );
}
