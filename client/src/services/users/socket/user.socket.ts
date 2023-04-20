import {useEffect, useState} from 'react';
import {socketContextState} from '../../../context/socket/Socket.context';
import {User} from '../api/user.api.type';
import {UserCreateSchema} from '../schemas/user.schema';
import {UseFormSetError} from 'react-hook-form';

export function userIndexSocket() {
  const {socket} = socketContextState();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    socket?.on('user-index-server', (users: User[]) => {
      setUsers(users);
    });
  }, [socket]);
  return users;
}

export function userCreateErrorSocket(
  setError: UseFormSetError<UserCreateSchema>,
) {
  const {socket} = socketContextState();

  useEffect(() => {
    socket?.on(
      'user-create-error-client',
      (error: {
        success: boolean;
        message: string;
        param: keyof UserCreateSchema;
      }) => {
        setError(error.param, {message: error.message});
      },
    );
  }, [socket]);
}

export function userEmitSocket() {
  const {socket} = socketContextState();

  const onCreate = (data: UserCreateSchema) =>
    socket?.emit('user-create-client', data);

  return {onCreate};
}
