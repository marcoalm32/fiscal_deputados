import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDespesasComponent } from './visualizar-despesas.component';

describe('VisualizarDespesasComponent', () => {
  let component: VisualizarDespesasComponent;
  let fixture: ComponentFixture<VisualizarDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDespesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
