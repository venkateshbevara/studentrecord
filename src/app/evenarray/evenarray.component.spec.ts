import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenarrayComponent } from './evenarray.component';

describe('EvenarrayComponent', () => {
  let component: EvenarrayComponent;
  let fixture: ComponentFixture<EvenarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
