import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AlunoDTO } from 'src/app/models/AlunoDTO';
@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url = 'http://localhost:5201/api/aluno';

  constructor(private http : HttpClient) { }

  listar() : Observable<any>
  {
  return this.http.get(this.url);
  }

  cadastrar(alunoDTO: AlunoDTO){
  return this.http.post(this.url,alunoDTO)
  }

  excluir(id : number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  editar(alunoDTO: AlunoDTO){
    return this.http.put(this.url,alunoDTO)
    }

}
