import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    let socketIO = null;

    if (authUser) {
      socketIO = io("http://localhost:3001", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socketIO);

      const handleOnlineUsers = (users) => {
        setOnlineUsers(users);
      };

      if (socketIO) {
        socketIO.on("getOnlineUsers", handleOnlineUsers);
      }

      // Cleanup function to close the socket and remove event listeners
      return () => {
        if (socketIO) {
          socketIO.off("getOnlineUsers", handleOnlineUsers);
          socketIO.close();
        }
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
