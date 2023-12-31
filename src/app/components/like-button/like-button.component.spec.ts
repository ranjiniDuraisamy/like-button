import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtonComponent } from './like-button.component';

describe('LikeButtonComponent', () => {
  let component: LikeButtonComponent;
  let fixture: ComponentFixture<LikeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeButtonComponent],
    });
    fixture = TestBed.createComponent(LikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call likeClicked method when button is clicked', () => {
    spyOn(component, 'likeClicked');
    let button =
      fixture.debugElement.nativeElement.querySelector('#like-element');
    button.click();
    expect(component.likeClicked).toHaveBeenCalled();
  });
});
