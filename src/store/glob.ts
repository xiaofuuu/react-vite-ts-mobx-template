import { makeAutoObservable } from 'mobx';

class GlobStore {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  add = () => {
    this.count += 1;
  };

  sub = () => {
    this.count >= 1 && this.count--;
  };

  get compGet() {
    return this.count >= 0 && this.count * 2;
  }
}

export default new GlobStore();
