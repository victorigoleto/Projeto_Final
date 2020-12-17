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
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  valorAntigo!: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    let id = this.route.snapshot.params['idProduto']
    

    this.identificarId(id)
  }

  identificarId(id: number){
    this.idProd = id
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
      this.valorAntigo = this.produto.preco + 10
      
      })
  }
  
>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5
}
