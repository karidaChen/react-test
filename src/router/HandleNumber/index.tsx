import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '@enos/dpl';
import MyStore from '../../store/Mystore';
import './index.scss';

@observer
class HandleNumber extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='jiajie-project-handle-number'>
        <h2>Now, Change Your Number</h2>
        <h3>Hello,<span className='user-name'>{MyStore.name}</span>, Your number is: {MyStore.myNumber.toFixed(0)}, The max number you can get is : {MyStore.maxNumber.toFixed(0)}</h3>
        <Button type='primary' onClick={MyStore.changeNumber}> change number</Button>
      </div>
    );
  }
}

export default HandleNumber;
