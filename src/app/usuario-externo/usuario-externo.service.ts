import { Component, OnInit, Input, OnChanges, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UsuarioExterno } from './usuario-externo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Component decorator
@Component({
    selector: 'usuario-externo-list',
    template: 'usuario-externo.html',
})

export class UsuarioExternoService {

    constructor (private http: Http) {}
    private usuarioExternoUrl = 'http://127.0.0.1:5000/user'; 
    private searchExternoUrl = 'http://127.0.0.1:5000/search'; 

    // Fetch all existing  usuario externos
    changeSituacaoUsuarioExterno(id_usuario_externo) : Observable<any>{
        return this
        .http
        .put(
            this.usuarioExternoUrl + "/situacao",           
            { "id": id_usuario_externo }
            )
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Search usuario externos
    search(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.searchExternoUrl,bodyString, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Fetch all existing  usuario externos
    getUsuariosExternos() : Observable<any>{
        return this.http.get(this.usuarioExternoUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Fetch all existing  usuario externos
    getUsuarioExterno(id:number) : Observable<any>{ 
        return this.http.get(`${this.searchExternoUrl}?id=`+id)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


     // Add a new usuario externo
    addUser (body: Object): Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usuarioExternoUrl, body, options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json() || 'Server error')); 
    }   

    // Update a usuario externo
    updateUser (body: Object): Observable<any> {
        let bodyString = JSON.stringify(body); 
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 

        return this.http.put(`${this.usuarioExternoUrl}`, body,options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json() || 'Server error')); 
    }   
    // Delete a usuario externo
    removeUser (id:string): Observable<any> {
        return this.http.delete(`${this.usuarioExternoUrl}?id=`+id) 
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json() || 'Server error')); 
    }   
}
