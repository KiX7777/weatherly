import MainStore from './MainStore';

export default class RootStore {
  mainStore: MainStore;
  constructor() {
    this.mainStore = new MainStore(this);
  }
}
