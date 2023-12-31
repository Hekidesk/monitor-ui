import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// eslint-disable-next-line no-undef
const URL = "http://130.185.75.197:8081/";


export const socket = io(URL, {
  autoConnect: false,
  // development
  cors: {
    origin: "http://localhost:3000",
  },
});
