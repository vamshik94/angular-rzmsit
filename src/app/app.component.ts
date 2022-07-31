import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  length: 0;
  domEles;
  moveCell(e){
    const activeEle = document.activeElement;
    const activeEleIndex = Array.prototype.indexOf.call(this.domEles, activeEle);
    if(e.key == "ArrowRight" && activeEleIndex < this.length - 1 ) {
        activeEle.nextElementSibling.focus();
    } 

    if(e.key == "ArrowLeft" && activeEleIndex > 0) {
       activeEle.previousElementSibling.focus();
    }
  }

  ngOnInit() {
    this.domEles = document.querySelectorAll('.container > *');
    this.length = this.domEles.length;
  }
}
