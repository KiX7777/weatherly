const APIKEY = import.meta.env.VITE_API_KEY;
import { toJS } from 'mobx';
import { coords } from '../Stores/MainStore';
import { coordsType } from '../types';
import { ForecastType } from '../types';
import axios from 'axios';

export default class HTTP_Service {
  successGeo = (pos: GeolocationPosition): coordsType => {
    const { latitude, longitude } = pos.coords;
    return { latitude, longitude };
  };

  errorGeo = (error: GeolocationPositionError): coords | undefined => {
    console.error(error.message);
    return {
      latitude: 45.84264135,
      longitude: 15.962231476593626,
    };
  };

  getCurrentLocation = async () => {
    return new Promise<coordsType>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(this.successGeo(position)), reject(this.errorGeo);
          },
          (error) => {
            resolve(this.errorGeo(error) as coordsType);
          }
        );
      } else {
        reject({ error: 'Geolocation not supported by browser' });
      }
    });
  };

  getCurrentWeather = async (coords: coords, unit: 'f' | 'c') => {
    const coordinates = toJS(coords) as { latitude: number; longitude: number };
    try {
      const response = await axios.get(
        `/weather/?lat=${coordinates.latitude}&lon=${coordinates.longitude}&unit=${unit}`
      );

      return response.data;
    } catch (error) {
      return Promise.reject(new Error());
    }

    // try {
    //   const res = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?lat=${
    //       coordinates.latitude
    //     }&lon=${coordinates.longitude}&appid=${APIKEY}&units=${
    //       unit === 'c' ? 'metric' : 'imperial'
    //     }`
    //   );

    //   if (!res.ok) {
    //     throw new Error(res.statusText);
    //   }

    //   const data: Promise<CurrentWeather> = res.json();
    //   return data;
    // } catch (error) {
    //   return Promise.reject(new Error());
    // }
  };

  getCoordsFromName = async (search: string) => {
    try {
      const response = await axios.get(`/coords/?search=${search}`);

      return response.data;

      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIKEY}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      return Promise.reject(new Error());
    }
  };

  getForecast = async (coords: coords, unit: 'c' | 'f') => {
    const coordinates = toJS(coords) as { latitude: number; longitude: number };
    try {
      const response = await axios.get(
        `/forecast/?lon=${coordinates.longitude}&lat=${coordinates.longitude}&unit=${unit}`
      );

      const data = response.data;
      const { list } = data;
      return list as ForecastType[];

      // const res = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?lat=${
      //     coordinates.latitude
      //   }&lon=${coordinates.longitude}&appid=${APIKEY}&units=${
      //     unit === 'c' ? 'metric' : 'imperial'
      //   }`
      // );
      // if (!res.ok) {
      //   throw new Error(res.statusText);
      // }

      // const data = await res.json();
      // const { list } = data;

      return list as ForecastType[];
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(new Error(error.message));
      }
    }
  };
}
