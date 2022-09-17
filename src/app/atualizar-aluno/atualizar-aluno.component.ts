import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoDTO } from '../models/AlunoDTO';
import { AlunoService } from '../services/aluno/aluno.service';

@Component({
  selector: 'app-atualizar-aluno',
  templateUrl: './atualizar-aluno.component.html',
  styleUrls: ['./atualizar-aluno.component.css']
})
export class AtualizarAlunoComponent implements OnInit {

  @Input()
  aluno! : AlunoDTO;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service : AlunoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id : [this.aluno.id],
      nome: [this.aluno.nome],
      matricula: [this.aluno.matricula]
    })

  }
  editar(){
    let aluno = this.form.getRawValue() as AlunoDTO;
    this.service.editar(aluno).subscribe((retorno)=>{

    })
    }
}
