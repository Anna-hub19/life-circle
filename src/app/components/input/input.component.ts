import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'salvar Item';
    valorItem!: string;
  constructor( private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
   if(!changes['itemQueVaiSerEditado'].firstChange){
     this.editando = true;
     this.textoBtn = 'editar item';
     this.valorItem = this.itemQueVaiSerEditado?.nome;
   }

  }
  editarItem(){
      this.listaService.editarItemdaLista(this.itemQueVaiSerEditado,
         this.valorItem);
         this.limparCampo();
         this.editando = false;
         this.textoBtn = "salvar item"
  }
  adicionarItem(){
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo(){
    this.valorItem = '';
  }
}
