import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioTrintaDiasComponent } from './desafio-trinta-dias.component';

describe('DesafioTrintaDiasComponent', () => {
  let component: DesafioTrintaDiasComponent;
  let fixture: ComponentFixture<DesafioTrintaDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioTrintaDiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioTrintaDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
