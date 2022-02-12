import { useQuery } from 'react-query';
import { fetcher } from '../helpers';

const usePost = (id) => {
  const { isLoading: isPostLoading, data: post } = useQuery(
    ['post', `/posts/${id}`],
    () => fetcher(`/posts/${id}`)
  );

  const { data: user } = useQuery(
    ['user', `/profile/${post?.userId}`],
    () => fetcher(`/profile/${post?.userId}`),
    {
      enabled: post ? true : false,
    }
  );

  const { data: photo } = useQuery(
    ['photo', `/photos/${user?.id}`],
    () => fetcher(`/photos/${user?.id}`),
    {
      enabled: user ? true : false,
    }
  );

  return [{ post, user, photo }, isPostLoading];
};

export default usePost;
