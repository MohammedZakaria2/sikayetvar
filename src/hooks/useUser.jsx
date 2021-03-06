import { useQuery } from 'react-query';
import { fetcher } from '../helpers';

const useUser = (id) => {
  const { isLoading, data: user } = useQuery(['user', `/profile/${id}`], () =>
    fetcher(`/profile/${id}`)
  );

  const { data: photo } = useQuery(
    ['photo', `/photos/${user?.id}`],
    () => fetcher(`/photos/${user?.id}`),
    {
      enabled: user ? true : false,
    }
  );

  return [{ user, photo }, isLoading];
};

export default useUser;
