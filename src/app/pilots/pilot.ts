
export class Pilot {
  id: number;
  crewId: number;
  constructor(
    public firstname: string,
    public lastname: string,
    public birthday: string,
    public experience: number
  ) { }
}