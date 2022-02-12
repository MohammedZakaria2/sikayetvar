import api from './api';

export const fetcher = async (url) => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.log('error:', error);
    throw new Error(error);
  }
};
