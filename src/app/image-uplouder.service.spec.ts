import { TestBed } from '@angular/core/testing';

import { ImageUploaderService } from './image-uplouder.service';

describe('ImageUplouderService', () => {
  let service: ImageUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
