import { Component, OnInit } from '@angular/core';
import { UsuarioExternoService } from './usuario-externo.service';
import { UsuarioExterno, PerfilUsuarioExterno ,
  SituacaoUsuarioExterno, FuncaoUsuarioExterno } from './usuario-externo';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-externo',
  templateUrl: './usuario-externo.component.html',
  styleUrls: ['./usuario-externo.component.css'],
  providers: [AppService,UsuarioExternoService]
})

export class UsuarioExternoComponent implements OnInit {
  
  usuariosExternos:UsuarioExterno[];
  perfilUsuarioExterno = new PerfilUsuarioExterno().perfil;
  situacaoUsuarioExterno = new SituacaoUsuarioExterno().situacao;
  funcaoUsuarioExterno = new FuncaoUsuarioExterno().funcao;
  alerta:any;
  user:any;

  search_situacao:any;
  search_perfil:any;
  search_usuario:any;


  constructor(
    private usuarioExternoService: UsuarioExternoService,
    private appService: AppService,
    private router: Router
    ) { };

  clearMessage(){
    this.alerta = {mensagem:"", tipo:""};
  }

  search(){
    let params={};

    if(this.search_usuario){
        params["usuario"] = this.search_usuario;
    }
    if(this.search_perfil){
        params["perfil_acesso"] = this.search_perfil.id;
    }
    if(this.search_situacao){
        params["situacao"] = this.search_situacao.id;
    }

    this.usuarioExternoService.search(params)
      .subscribe(
          res => {
             if (res.status == 201){   
                // this.alerta.mensagem = res.message;
                // this.alerta.tipo = "success";
                this.usuariosExternos = res.message; 
                console.log(this.usuariosExternos)     
                for(let u in this.usuariosExternos){

                   for(let i in this.perfilUsuarioExterno){ 

                        if(String(this.perfilUsuarioExterno[i]['id'])===String(this.usuariosExternos[u].perfil_acesso))
                        {
                            this.usuariosExternos[u].perfil_acesso = this.perfilUsuarioExterno[i];
                        }
                    }

                    for(let i in this.funcaoUsuarioExterno){              
                        if(String(this.funcaoUsuarioExterno[i]['id'])===String(this.usuariosExternos[u].funcao))
                        {
                            this.usuariosExternos[u].funcao = this.funcaoUsuarioExterno[i];
                        }
                    }
                 }
               }
          });
  }

  getUsuariosExternos(){
  	this.usuarioExternoService.getUsuariosExternos()
      .subscribe(
          res => {
         		this.usuariosExternos = res.message;       
            for(let u in this.usuariosExternos){

               for(let i in this.perfilUsuarioExterno){ 

                    if(String(this.perfilUsuarioExterno[i]['id'])===String(this.usuariosExternos[u].perfil_acesso))
                    {
                        this.usuariosExternos[u].perfil_acesso = this.perfilUsuarioExterno[i];
                    }
                }

                for(let i in this.funcaoUsuarioExterno){              
                    if(String(this.funcaoUsuarioExterno[i]['id'])===String(this.usuariosExternos[u].funcao))
                    {
                        this.usuariosExternos[u].funcao = this.funcaoUsuarioExterno[i];
                    }
                }



            }  	
          }, 
          err => {	                    
              console.log(err);
          });	

  }

  getSituacao(situacao) { return situacao == "I"? true : false; }
  
  changeSituacao(idUsuarioExterno) { 
	this.usuarioExternoService.changeSituacaoUsuarioExterno(idUsuarioExterno)
        .subscribe(
            res => {
           		if (res.status == 201){   
           			this.alerta.mensagem = res.message;
                this.alerta.tipo = "success";
           			this.getUsuariosExternos();
           		}
            }, 
            err => {	                    
                console.log(err);
            });	

  }

  removeUser(idUsuarioExterno) { 
    this.usuarioExternoService.removeUser(idUsuarioExterno)
        .subscribe(
            res => {
               if (res.status == 201){   
                this.alerta.mensagem = res.message;
                 this.alerta.tipo = "success";
                  this.getUsuariosExternos();
               }
            }, 
            err => {                      
                console.log(err);
            });  

  }

  getUsuarioExterno(idUsuarioExterno){
    this.router.navigate(['/user/editar',idUsuarioExterno]);  
  }


  ngOnInit() {
		this.getUsuariosExternos();
    this.clearMessage();
  }

}
