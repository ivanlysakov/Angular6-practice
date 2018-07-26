export class Flight {
    id: number;
    type: string;
    constructor(
      public number: string,
      public departure: string,
      public departureTime: string,
      public destination: string,
      public arrivalTime: string
    ) { }
  }
  