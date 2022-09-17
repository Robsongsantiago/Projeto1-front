import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoDTO } from '../models/AlunoDTO';
import { AlunoService } from '../services/aluno/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  alunos : AlunoDTO[]=[];
  aluno! : AlunoDTO;
  mostrar : boolean = false;
  constructor(
    private service : AlunoService,
    private router : Router
    ) { }

  ngOnInit(): void
  {
    this.listar();
  }

  listar()
  {
    this.service.listar().subscribe((alunos)=>{
      this.alunos = alunos;
    });
  }

  excluir(id : number){
    this.service.excluir(id).subscribe((retorno)=>{
      this.listar();
    })
  }

  editar(item: AlunoDTO){
    this.aluno = item as AlunoDTO;
    this.mostrar = true;
  }

}
