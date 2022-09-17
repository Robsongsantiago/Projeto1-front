import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarAlunoComponent } from './atualizar-aluno/atualizar-aluno.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

const routes: Routes = [
  {
    path : "cadastrar",
    component : CadastroAlunoComponent
  },
  {
    path : "listar",
    component : ListarAlunoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
