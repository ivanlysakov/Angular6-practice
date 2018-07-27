
export class Pilot {
  id: number;
  
  constructor(
    public firstname: string,
    public lastname: string,
    public birthday: string,
    public experience: number,
    public crewId: number
  ) { }
}