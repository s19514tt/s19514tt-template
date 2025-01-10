export type ServerToClientEvents = {
  messageToClient: (message: string) => void;
};

export type ClientToServerEvents = {
  messageToServer: (message: string) => void;
};
