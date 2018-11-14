export class UsuarioExterno {
    constructor(
    	public id: number, 
        public usuario: string, 
        public email: string, 
        public cpf:string,
        public situacao:SituacaoUsuarioExterno,
        public perfil_acesso:PerfilUsuarioExterno,
        public funcao:FuncaoUsuarioExterno,
        public telefone:string,
        public message:string
        ){}
}

export class SituacaoUsuarioExterno {
    constructor(
        public situacao:Object = [
        {id:"I",name:"Ativo"},
        {id:"A",name:"Inativo"}  
        ]
        ){}

    get(id){
        for(let i in this.situacao){            
            if(String(this.situacao[i]['id'])===String(id))
                return this.situacao[i] as Object
        }

    }
}

export class PerfilUsuarioExterno {
    constructor(
        public perfil:Object = [
        {id:1,name:"Gestor Nacional"},
        {id:2,name:"Gestor Estadual"},
        {id:3,name:"Gestor Municipal"}       
        ]
        ){}

    get(id){
        for(let i in this.perfil){            
            if(String(this.perfil[i]['id'])===String(id))
            {
      
                console.log(this.perfil[i])
                 
                return this.perfil[i]
            }
        }

    }
}

export class FuncaoUsuarioExterno {
    constructor(
        public funcao:Object = [
        {id:"1",name:"Gestor"},
        {id:"2",name:"Operador"},
        {id:"3",name:"Frente de caixa"}       
        ]
        ){}

     get(id){
        for(let i in this.funcao){            
            if(String(this.funcao[i]['id'])===String(id))
                return this.funcao[i] as Object
        }

    

    }
}

