import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamItComponent } from './stream-it.component';

describe('StreamItComponent', () => {
  let component: StreamItComponent;
  let fixture: ComponentFixture<StreamItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
