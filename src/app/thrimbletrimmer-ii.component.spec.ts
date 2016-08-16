import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ThrimbletrimmerIIAppComponent } from '../app/thrimbletrimmer-ii.component';

beforeEachProviders(() => [ThrimbletrimmerIIAppComponent]);

describe('App: ThrimbletrimmerII', () => {
  it('should create the app',
      inject([ThrimbletrimmerIIAppComponent], (app: ThrimbletrimmerIIAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Thrimbletrimmer II!\'',
      inject([ThrimbletrimmerIIAppComponent], (app: ThrimbletrimmerIIAppComponent) => {
    expect(app.title).toEqual('Thrimbletrimmer II!');
  }));
});
