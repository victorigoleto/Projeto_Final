import { Component, OnInit } from '@angular/core';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppModule } from '../app.module';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})

export class HomeComponent implements OnInit {
  title = 'angularowlslider';
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['Anterior', 'Proximo'],
    responsive: {
      0: {
        items: 1
        
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  
  constructor() { 
    
  }



  public ngOnInit(): void {
   
  }
}