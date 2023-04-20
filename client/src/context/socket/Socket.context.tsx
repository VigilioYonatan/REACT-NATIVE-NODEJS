import {createContext, useContext, useEffect, useState} from 'react';
import socketIO, {Socket} from 'socket.io-client';
type SocketContextProps = {socket: null | Socket};
const SocketContext = createContext({} as SocketContextProps);

type SocketProviderProps = {children: JSX.Element | JSX.Element[]};
export function SocketProvider({children}: SocketProviderProps) {
  const [socket, setSocket] = useState<null | Socket>(null);
  function connectSocket() {
    const io = socketIO('http://192.168.100.12:4000/');
    setSocket(io);
  }
  useEffect(() => {
    connectSocket();
  }, []);

  useEffect(() => {
    socket?.on('connect', () => {
      console.log('conectado');
    });
  }, [socket]);
  useEffect(() => {
    socket?.on('disconnect', () => {
      console.log('desconectado');
    });
  }, [socket]);

  useEffect(() => {
    socket?.on('create-server', data => {
      console.log(data);
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
  );
}

export const socketContextState = () => useContext(SocketContext);
