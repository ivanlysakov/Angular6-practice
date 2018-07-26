export class Ticket {
    id: number;
    flightId: number;
    constructor(
        public price: number,
        public flightNumber: string
        
    ) { }
  }