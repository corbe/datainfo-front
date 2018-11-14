import { Component, OnInit } from '@angular/core';
import { UsuarioExterno, PerfilUsuarioExterno ,
  SituacaoUsuarioExterno, FuncaoUsuarioExterno } from '../usuario-externo/usuario-externo';
import { UsuarioExternoService } from '../usuario-externo/usuario-externo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-usuario-externo-incluir',
  templateUrl: './usuario-externo-incluir.component.html',
  styleUrls: ['./usuario-externo-incluir.component.css'],
  providers: [UsuarioExternoService]
})
export class UsuarioExternoIncluirComponent implements OnInit {

  constructor( 
    private usuarioExternoService: UsuarioExternoService,
    private activateRoute: ActivatedRoute) { }

  perfilUsuarioExterno = new PerfilUsuarioExterno().perfil;
  situacaoUsuarioExterno = new SituacaoUsuarioExterno().situacao;
  funcaoUsuarioExterno = new FuncaoUsuarioExterno().funcao;
  selectedValue;
  alerta:any;
  user:UsuarioExterno = this.newUser();
  submitted = false;

  newUser(){
      return new UsuarioExterno(undefined,
        '','','',
        new SituacaoUsuarioExterno().situacao[0],
        new PerfilUsuarioExterno().perfil[0],
        new FuncaoUsuarioExterno().funcao[0],'','');  
  }

  

  clearMessage(){
    this.alerta = {mensagem:"", tipo:""};
  }

  onSubmit() { 
    this.clearMessage();  
    if(this.user.id==undefined)
    { 
      this.usuarioExternoService.addUser(this.user)
        .subscribe(
            res => {
               if (res.status == 201){   
                   this.alerta.mensagem = res.message;
                   this.alerta.tipo = "success";
                   this.user = this.newUser();
                   this.submitted = true;
                   
                 }
            }, 
            err => { 
              this.alerta.mensagem = err.message;
              this.alerta.tipo = "danger";
            });  
      }
      else{
       this.usuarioExternoService.updateUser(this.user)
              .subscribe(
                  res => {
                      if (res.status == 201){   
                         this.alerta.mensagem = res.message;
                         this.alerta.tipo = "success";
                         this.user = this.newUser();
                         this.submitted = true
                 
                          
                       }
                      
                    // }
                  }, 
                  err => {                      
                      this.alerta.mensagem = err.message;
                      this.alerta.tipo = "danger";
                  });  

            }
     }


 

  ngOnInit() {
    this.clearMessage();  
    let idUsuarioExterno = undefined;
    this.activateRoute.params.subscribe(params => {
            idUsuarioExterno = params["id"];
            if (idUsuarioExterno!== undefined){
              this.usuarioExternoService.getUsuarioExterno(idUsuarioExterno)
              .subscribe(
              res => {
                this.user = res.message;
                
          
                for(let i in this.perfilUsuarioExterno){              
                    if(String(this.perfilUsuarioExterno[i]['id'])===String(res.message.perfil_acesso))
                    {
                        this.user.perfil_acesso = this.perfilUsuarioExterno[i];
                    }
                }

                for(let i in this.funcaoUsuarioExterno){              
                    if(String(this.funcaoUsuarioExterno[i]['id'])===String(res.message.funcao))
                    {
                        this.user.funcao = this.funcaoUsuarioExterno[i];
                    }
                }

              }, 
              err => {                      
                console.log(err);
              });  

            }
        })
  
  }

}
