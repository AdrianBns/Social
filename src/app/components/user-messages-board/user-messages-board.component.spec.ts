import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessagesBoardComponent } from './user-messages-board.component';

describe('UserMessagesBoardComponent', () => {
  let component: UserMessagesBoardComponent;
  let fixture: ComponentFixture<UserMessagesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMessagesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessagesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
