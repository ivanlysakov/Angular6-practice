export class AirplaneType {
    id: number;
    constructor (
      public capacity: number,
      public cargo: number,
      public model: string,
      public airplaneId:number){}
  }