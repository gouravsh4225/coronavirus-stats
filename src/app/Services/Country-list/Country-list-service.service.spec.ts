import { TestBed } from "@angular/core/testing";

import { CountrylistService } from "./Country-list-service.service";

describe("CountrylistService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CountrylistService = TestBed.get(CountrylistService);
    expect(service).toBeTruthy();
  });
});
