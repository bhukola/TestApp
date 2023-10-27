import { Component } from '@angular/core';
import * as $ from 'jquery';
// import "~font-awesome/css/font-awesome.css";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
$(".bars").click(() => {
  $(".mobile__nav__fade__and__show__circle").toggleClass("open");
  $(".mobile__nav__fade__and__show").toggleClass("open");
  $(".bars").toggleClass("toggle")
  
})
