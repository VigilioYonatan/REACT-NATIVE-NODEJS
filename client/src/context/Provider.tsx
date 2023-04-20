import {SocketProvider} from './socket/Socket.context';

type ProviderProps = {children: JSX.Element | JSX.Element[]};
export function Provider({children}: ProviderProps) {
  return <SocketProvider>{children}</SocketProvider>;
}
