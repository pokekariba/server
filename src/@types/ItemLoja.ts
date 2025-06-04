import { ItemLoja } from "@prisma/client";

export interface ItemLojaResponse extends ItemLoja {
  obtido: boolean;
}
