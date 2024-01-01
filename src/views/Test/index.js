import React, { useEffect, useState } from "react";

import { socket } from "socket";

function Test() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  console.log(isConnected, fooEvents);
  useEffect(() => {
    function onConnect() {
      socket.emit("subscribe_to_topic", { topic: "ecg" });

      console.log("called in connect and emit!");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("disconnect socket");
      setIsConnected(false);
      socket.emit("unsubscribe_from_topic");
    }

    function onPPGEvent(value) {
      console.log("ppg", value);
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("subscribe_to_topic", onPPGEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("subscribe_to_topic", onPPGEvent);
    };
  }, []);

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>connect</button>
      <button onClick={disconnect}>disconnect</button>
    </>
  );
}
export default Test;
