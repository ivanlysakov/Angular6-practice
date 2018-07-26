export class Airplane {
  id: number;
  type: AirplaneType;
  constructor(
    public name: string,
    public typeId: number,
    public lifetime: number,
    public creationdate: string
  ) { }
}

export class AirplaneType {
  id: number;
  model: string;
  capacity: number;
  cargo: number;
}