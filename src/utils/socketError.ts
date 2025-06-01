import { Socket } from "socket.io";

export const socketError = (
  message: string,
  status: number = 400,
  socket?: Socket
): Error => {
  const err = new Error(message);
  (err as any).data = { status };
  if (socket) {
    socket?.emit("erro_partida", {
      message: err.message,
      status: (err as any).data.status,
    });
  }
  return err;
};
