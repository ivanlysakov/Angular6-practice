export class Airplane {
  id: number;
  type: string;
  constructor(
    public name: string,
    public typeId: number,
    public lifetime: number,
    public creationdate: string
  ) { }
}

