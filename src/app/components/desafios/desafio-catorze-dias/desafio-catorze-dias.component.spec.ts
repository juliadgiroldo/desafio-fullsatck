import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioCatorzeDiasComponent } from './desafio-catorze-dias.component';

describe('DesafioCatorzeDiasComponent', () => {
  let component: DesafioCatorzeDiasComponent;
  let fixture: ComponentFixture<DesafioCatorzeDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioCatorzeDiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioCatorzeDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
