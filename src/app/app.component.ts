import { Component } from '@angular/core';
import * as $ from 'jquery';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  }

$(".bars").click(() => {
  $(".mobile__nav__fade__and__show__circle").toggleClass("open");
  $(".mobile__nav__fade__and__show").toggleClass("open");
  $(".bars").toggleClass("toggle")
  
})



