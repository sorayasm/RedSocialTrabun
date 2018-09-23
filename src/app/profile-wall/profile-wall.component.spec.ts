import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWallComponent } from './profile-wall.component';

describe('ProfileWallComponent', () => {
  let component: ProfileWallComponent;
  let fixture: ComponentFixture<ProfileWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
