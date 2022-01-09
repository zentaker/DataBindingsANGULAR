import { Component, OnInit, Input , Output, EventEmitter, OnDestroy} from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit, OnDestroy{

  //input una propiedad puede ser recivida de afuera
  @Input() heroe:any ={}; // es un decorador
  @Input() index!: number;
  private t1!: number;
  private t2!: number;
  private hot: string[] = [];

  //evento que el padre tiene que estar esuchando

  @Output() heroeSelcionado!: EventEmitter<number>;

  constructor(private heroesServcice: HeroesService) {
    this.heroeSelcionado = new EventEmitter();
   }
  ngOnDestroy(): void {
    //this.heroesServcice.putHot(this.hot)
    console.log('los mas hot fueron'+ this.hot)
    alert(this.hot);
  }

  ngOnInit(): void {
  }

  verHeroe( ){
    console.log(this.index);
    this.heroeSelcionado.emit(this.index);
    //his.router.navigate( ['/heroe',idx] );
  }



  mouseEnter(div : number){
    this.t1 = performance.now();
    //console.log("mouse enter : " + div);
 }

 mouseLeave(div : number){
   this.t2 = performance.now();
   //console.log('mouse leave :' + div);

  
   this.tiempo(div);
 }

 tiempo(id: number) {
   if((this.t2 - this.t1)>=5000) {
     let ide = id.toString();
     this.hot.push(ide);
    
     console.log('hot pick id: ' + id)
   }

 }
 
  
  

}



