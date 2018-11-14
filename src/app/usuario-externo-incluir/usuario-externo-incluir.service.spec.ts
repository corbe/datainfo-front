import { TestBed } from '@angular/core/testing';

import { UsuarioExternoIncluirService } from './usuario-externo-incluir.service';

describe('UsuarioExternoIncluirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioExternoIncluirService = TestBed.get(UsuarioExternoIncluirService);
    expect(service).toBeTruthy();
  });
});
