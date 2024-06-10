import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioSeteDiasComponent } from './desafio-sete-dias.component';

describe('DesafioSeteDiasComponent', () => {
  let component: DesafioSeteDiasComponent;
  let fixture: ComponentFixture<DesafioSeteDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioSeteDiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioSeteDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
