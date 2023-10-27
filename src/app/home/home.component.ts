import { Component } from '@angular/core';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  breakpoint: number=1;
  constructor() {
    // Initialize the breakpoint or other properties as needed
    this.calculateBreakpoint();

}
calculateBreakpoint() {
  const windowWidth = window.innerWidth;

  // Define your logic for calculating the breakpoint based on window width
  if (windowWidth < 1500) {
    this.breakpoint = 1;
  } else if (windowWidth < 992) {
    this.breakpoint = 2;
  } else if (windowWidth < 1200) {
    this.breakpoint = 3;
  } else {
    this.breakpoint = 4;
  }
}

@HostListener('window:resize', ['$event'])
onResize(event: Event): void {
  // You can add your resize logic here
  this.calculateBreakpoint();
}

}


$(".bars").click(() => {
  $(".mobile__nav__fade__and__show__circle").toggleClass("open");
  $(".mobile__nav__fade__and__show").toggleClass("open");
  $(".bars").toggleClass("toggle")
  
})
