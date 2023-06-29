import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'duq9nqglj',
      api_key: '387459651661874',
      api_secret: 'UYk5J8-dNH0s02RcUgEgIFfzTLA',
    });
  },
};
