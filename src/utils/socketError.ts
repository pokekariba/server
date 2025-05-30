import { Socket } from "socket.io";

export const socketError = (
  message: string,
  status: number = 400,
  emit = false,
  socket?: Socket
): Error => {
  const err = new Error(message);
  (err as any).data = { status };
  if (emit) {
    socket?.emit("erro_partida", {
      message: err.message,
      status: (err as any).data.status,
    });
  }
  return err;
};
