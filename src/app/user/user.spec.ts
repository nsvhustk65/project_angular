import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoponent } from './user';

describe('User', () => {
  let component: UserCoponent;
  let fixture: ComponentFixture<UserCoponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCoponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
