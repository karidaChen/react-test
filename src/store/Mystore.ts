import {observable, action, computed} from 'mobx';
import {message} from '@enos/dpl';
import {makeRequest} from './Request';

class Mystore {
  @observable myNumber = 0;

  @observable myName = 'guest';

  @observable name = 'guest';

  @observable showHelloTypeScript = false;

  @action.bound
  toggleResult = (): void => {
    this.showHelloTypeScript = !this.showHelloTypeScript;
  };

  @action.bound
  changeNumber(): void {
    this.myNumber = 10 * Math.random();
  }

    @computed get maxNumber(): number {
    return this.myNumber * 10;
  }

  @action.bound
    sendRequest(): void {
      makeRequest('/api/test').then((data) => {
        message.success((data as any).message);
      });
    }
}

export default new Mystore();
