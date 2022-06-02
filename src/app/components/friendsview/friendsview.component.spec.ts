import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsviewComponent } from './friendsview.component';

describe('FriendsviewComponent', () => {
  let component: FriendsviewComponent;
  let fixture: ComponentFixture<FriendsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
