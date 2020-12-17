import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { GetNomeComponent } from './get-nome/get-nome.component';
import { GetTipoComponent } from './get-tipo/get-tipo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: 'sobre', component: SobreComponent},
  {path: 'home',component: HomeComponent},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro',component: CadastroComponent},
  {path: 'minhaConta',component: MinhaContaComponent},
  {path: 'perfilLateral',component: PerfilLateralComponent},

  {path: 'doacao',component: DoacaoComponent},

  {path: 'carrinho',component: CarrinhoComponent},
  {path: 'get-nome/:nome', component: GetNomeComponent},
  {path: 'get-tipo', component: GetTipoComponent},
<<<<<<< HEAD

  {path: 'carrinho',component: CarrinhoComponent},

  {path: 'doacao',component: DoacaoComponent},
  {path: 'produto',component: ProdutoComponent}

=======
  {path: 'carrinho/:idProduto',component: CarrinhoComponent},
  {path: 'doacao',component: DoacaoComponent},
  {path: 'produto/:idProduto',component: ProdutoComponent}
>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
