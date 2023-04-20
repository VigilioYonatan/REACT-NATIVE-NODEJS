import {useQuery} from '@vigilio/react-fetching';
import {userIndexFetch, userShowFetch} from './user.fetch';

export function userApi() {
  const index = () => useQuery('/user', userIndexFetch);
  const show = (id: number) => useQuery(`/user/${id}`, userShowFetch);
  return {index, show};
}
