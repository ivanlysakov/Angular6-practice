import { AirportModule } from './airport.module';

describe('AirportModule', () => {
  let airportModule: AirportModule;

  beforeEach(() => {
    airportModule = new AirportModule();
  });

  it('should create an instance', () => {
    expect(airportModule).toBeTruthy();
  });
});
