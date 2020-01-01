import { TestBed } from '@angular/core/testing';

import { IonicNativeService } from './ionic-native.service';

describe('IonicNativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicNativeService = TestBed.get(IonicNativeService);
    expect(service).toBeTruthy();
  });
});
