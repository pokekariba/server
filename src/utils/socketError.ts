export const socketError = (message: string, status: number = 400): Error => {
  const err = new Error(message);
  (err as any).data = { status };
  return err;
};
