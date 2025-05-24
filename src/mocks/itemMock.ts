export const findItemById = async (id: number) => {
  console.log(`Mock: buscando item com id ${id}`);
  if (id === 123) {
    return { id: 123, tipo: "categoriaMock" };
  }
  return null;
};
