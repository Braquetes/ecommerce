import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtstComponent } from './rtst.component';

describe('RtstComponent', () => {
  let component: RtstComponent;
  let fixture: ComponentFixture<RtstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
