import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { AtualizarAlunoComponent } from './atualizar-aluno/atualizar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    ListarAlunoComponent,
    AtualizarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
