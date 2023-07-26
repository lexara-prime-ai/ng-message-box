import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMessageBoxComponent } from './angular-message-box.component';

describe('AngularMessageBoxComponent', () => {
  let component: AngularMessageBoxComponent;
  let fixture: ComponentFixture<AngularMessageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMessageBoxComponent]
    });
    fixture = TestBed.createComponent(AngularMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
