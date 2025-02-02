import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item! : Item
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(){
    console.log('Conseguiram me calar.')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }
  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }
  deletarItem(){
    console.log('Estão tentando me calar.')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

}
