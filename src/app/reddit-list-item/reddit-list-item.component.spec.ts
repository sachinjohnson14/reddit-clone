import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditListItemComponent } from './reddit-list-item.component';

describe('RedditListItemComponent', () => {
  let component: RedditListItemComponent;
  let fixture: ComponentFixture<RedditListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
