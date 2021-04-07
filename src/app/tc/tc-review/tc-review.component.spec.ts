import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcReviewComponent } from './tc-review.component';

describe('TcReviewComponent', () => {
  let component: TcReviewComponent;
  let fixture: ComponentFixture<TcReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
