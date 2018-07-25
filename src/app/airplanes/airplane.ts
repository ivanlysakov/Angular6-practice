export class Airplane {
  id: number;
  constructor(
    public name: string,
    public type: number,
    public lifetime: number,
    public creationdate: string
  ) { }
}

export class AirplaneType {
  id: number;
  model: string;
  capacity: number;
  cargo
}