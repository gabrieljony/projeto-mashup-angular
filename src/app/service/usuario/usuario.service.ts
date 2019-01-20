import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from '@angular/common/http';
import { GenericService } from "../../commons/generic.service";

@Injectable()
export class UsuarioService extends GenericService {
    private relativePath: string = 'api/usuario/';
    constructor(http: HttpClient){
        super(http);
    }

    salvar(id, login, nome) : Observable<any>{
        return this.http.post(this.url + this.relativePath, { id: id, login: login, nome: nome });
    }

    sessao(): Observable<any> {
        return this.getMethod(this.relativePath + 'sessao');
    }
}