export class Departure {
    id: number;
    crewId: number;
    airplaneID: number;
    constructor(
        public flightNumber: string,
        public time: string,
) { }
}