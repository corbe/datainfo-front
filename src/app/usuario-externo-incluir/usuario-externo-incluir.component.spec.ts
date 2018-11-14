import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExternoIncluirComponent } from './usuario-externo-incluir.component';

describe('UsuarioExternoIncluirComponent', () => {
  let component: UsuarioExternoIncluirComponent;
  let fixture: ComponentFixture<UsuarioExternoIncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioExternoIncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioExternoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
