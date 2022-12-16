import { TestBed } from '@angular/core/testing';

import { UserManagGuard } from './user-manag.guard';

describe('UserManagGuard', () => {
  let guard: UserManagGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserManagGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
