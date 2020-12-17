import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
<<<<<<< HEAD
=======
import { AlertasService } from '../service/alertas.service';
>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5
import { CategoriaService } from '../service/categoria.service';
import { MidiaService } from '../service/midia.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-get-tipo',
  templateUrl: './get-tipo.component.html',
  styleUrls: ['./get-tipo.component.css']
})
export class GetTipoComponent implements OnInit {

  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  nome!: string
  tipoCategoria!: string
  nomeProduto!: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
<<<<<<< HEAD
    private midiaService: MidiaService
=======
    private midiaService: MidiaService,
    private alert: AlertasService
>>>>>>> e2ecb157e1ad4e8bb3d38f8cd36e9c1b5b903ba5
  ) { }

  ngOnInit(): void {
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
      this.listaCategoria = resp
    })
  }
  
  findByTipoCategoria() {
    if (this.tipoCategoria === ''){
      this.findAllCategorias()
    } else{
      this.categoriaService.getByTipoCategoria(this.tipoCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategoria = resp
      })
    }
  }
}
