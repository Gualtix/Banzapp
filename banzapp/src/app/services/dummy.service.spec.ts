import { TestBed } from '@angular/core/testing';

import { DummyService } from './dummy.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DummyService', () => {
  let service: DummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DummyService]
    });
    service = TestBed.get(DummyService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
