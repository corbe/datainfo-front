import { TestBed } from '@angular/core/testing';

import { UsuarioExternoService } from './usuario-externo.service';

describe('UsuarioExternoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioExternoService = TestBed.get(UsuarioExternoService);
    expect(service).toBeTruthy();
  });
});
