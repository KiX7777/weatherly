import { makeAutoObservable, runInAction } from 'mobx';
import RootStore from './RootStore';
import HTTP_Service from '../services/weatherAPI';

const localUnit = localStorage.getItem('unit');
type Unit = 'c' | 'f';
type Mode = 'today' | 'forecast';
export type coords = { latitude: number; longitude: number } | string | null;
interface mainStore {
  unit: Unit;
  place: string;
  mode: Mode;
  coords: coords;
  searching: boolean;
  search: string;
  initialLoad: boolean;
  typing: boolean;
}

class MainStore implements mainStore {
  unit = localUnit ? (localUnit as Unit) : ('c' as Unit);
  place = '';
  mode = 'today' as Mode;
  searching = false;
  search = '';
  initialLoad = true;
  typing = false;
  coords = null as coords;
  HTTPService;
  rootStore: RootStore;

  constructor(root: RootStore) {
    this.rootStore = root;
    makeAutoObservable(this);
    this.HTTPService = new HTTP_Service();
  }

  setUserCoords(coords: coords): void {
    this.coords = coords;
  }

  get currentCoords(): coords {
    return this.coords;
  }

  setLoad = (l: boolean): void => {
    this.initialLoad = l;
  };

  setMode = (mode: 'today' | 'forecast'): void => {
    this.mode = mode;
  };
  setUnit = (unit: 'c' | 'f'): void => {
    this.unit = unit;
    localStorage.setItem('unit', unit);
  };
  setSearching(bool: boolean): void {
    this.searching = bool;
  }
  setSearch(query: string): void {
    this.search = query;
  }
  setTyping = (t: boolean): void => {
    this.typing = t;
  };

  async getLocation(): Promise<void> {
    const res = await this.HTTPService.getCurrentLocation();
    runInAction(() => {
      this.coords = res;
      this.initialLoad = false;
    });
  }
}

export default MainStore;
