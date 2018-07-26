import { Type } from "../types/type";

export class Airplane {
  id: number;
  type: Type;
  constructor(
    public name: string,
    public typeId: number,
    public lifetime: number,
    public creationdate: string
  ) { }
}

