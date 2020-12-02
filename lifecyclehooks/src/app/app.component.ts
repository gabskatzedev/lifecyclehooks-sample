import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number: number = 10;
  name: string = "gaby";
  isVisible: boolean = true;


  user = {
    name: "gaby"
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }
  updateValue() {
    //passed by reference, it's called just ngDoCheck
    this.user.name = "ximun";
  }

  // updateValue() {
  //   //alocate in the memory, its reinitialize the whole object and it's going to activate ngOnChanges
  //   this.user = {
  //     name: "ximun"
  //   }
  // }

  get counter() {
    return this.number;
  }

  set counter(value) {
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
