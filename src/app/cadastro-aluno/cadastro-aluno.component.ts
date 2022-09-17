import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoDTO } from '../models/AlunoDTO';
import { AlunoService } from '../services/aluno/aluno.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service : AlunoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [''],
      matricula: ['']
    })
  }

  cadastrar(){
  let aluno = this.form.getRawValue() as AlunoDTO;
  this.service.cadastrar(aluno).subscribe((retorno)=>{

  })
  }
}
