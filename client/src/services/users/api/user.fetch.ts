import {BASE_URL} from '../../../utils/axios.util';
import {UserIndexAPI, UserShowAPI} from './user.api.type';

export async function userIndexFetch(url: string) {
  const {data} = await BASE_URL.get<UserIndexAPI>(url);
  return data;
}
export async function userShowFetch(url: string) {
  const {data} = await BASE_URL.get<UserShowAPI>(url);
  return data;
}
