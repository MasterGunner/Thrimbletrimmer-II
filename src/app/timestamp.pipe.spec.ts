import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Timestamp } from './timestamp.pipe';

describe('Timestamp Pipe', () => {
  beforeEachProviders(() => [Timestamp]);

  it('should transform the input', inject([Timestamp], (pipe: Timestamp) => {
      expect(pipe.transform(10)).toBe('00:00:10');
  }));
});
