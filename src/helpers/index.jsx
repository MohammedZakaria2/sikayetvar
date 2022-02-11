import { BASE_UEL } from '../constants';

export const fetcher = async (url) => {
  try {
    const data = await fetch(`${BASE_UEL}${url}`);
    return data.json();
  } catch (error) {
    console.log('error:', error);
    throw new Error(error);
  }
};
