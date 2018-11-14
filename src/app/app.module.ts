import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioExternoComponent } from './usuario-externo/usuario-externo.component';
import { UsuarioExternoIncluirComponent } from './usuario-externo-incluir/usuario-externo-incluir.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UsuarioExternoComponent
      },
      {
        path: 'incluir',
        component: UsuarioExternoIncluirComponent
      },
      {
        path: 'editar/:id',
        component: UsuarioExternoIncluirComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioExternoComponent,
    UsuarioExternoIncluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
