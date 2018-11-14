import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExternoComponent } from './usuario-externo.component';

describe('UsuarioExternoComponent', () => {
  let component: UsuarioExternoComponent;
  let fixture: ComponentFixture<UsuarioExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
