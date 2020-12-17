import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

<<<<<<< HEAD
  total: number = 100
  
  constructor() { }

  ngOnInit(): void {
  }

=======
  idProdutos!: number[]
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  listaProd!: []
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  
  total: number = 100
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    let idProd = this.route.snapshot.params["idProduto"]

    this.identificarId(idProd)
  }

  identificarId(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
    this.listaProduto.push({...this.produto})
  }

  
>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5
}
