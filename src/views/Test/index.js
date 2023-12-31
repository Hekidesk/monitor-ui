import React, { useEffect, useState } from "react";

import { socket } from "socket";

function Test() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  console.log(
    "🚀 ~ file: HeartBeat.js:13 ~ Heartbeat ~ isConnected:",
    isConnected
  );
  const [fooEvents, setFooEvents] = useState([]);
  console.log("🚀 ~ file: HeartBeat.js:15 ~ Heartbeat ~ fooEvents:", fooEvents);

  useEffect(() => {
    function onConnect() {
      socket.emit("subscribe_to_topic", { topic: "ppg" });

      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
      socket.emit("unsubscribe_from_topic");
    }

    function onPPGEvent(value) {
      console.log("🚀 ~ file: HeartBeat.js:32 ~ onFooEvent ~ value:", value);
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
