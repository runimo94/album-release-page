import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherReleasesComponent } from './other-releases.component';

describe('OtherReleasesComponent', () => {
  let component: OtherReleasesComponent;
  let fixture: ComponentFixture<OtherReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
