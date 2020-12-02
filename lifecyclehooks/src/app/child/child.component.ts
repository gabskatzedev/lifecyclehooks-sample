import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number;
  @Input() myString;


  constructor() { }

  @Input()
  set myNewNumber(number: number){
    this.myNumber = number;
  }

  get myNewNumber(){
    return this.myNumber;
  }
  ngOnChanges(changes: SimpleChanges){
    //debugger;
    const newNumberChange: SimpleChange = changes.myNewNumber;
    
      console.log("ngOnChanges - Previous value: ", newNumberChange.previousValue);
      console.log("ngOnChanges - Current value: ", newNumberChange.currentValue);
      this.myNewNumber = newNumberChange.currentValue;
     
  }

  //usefull to initialize variables
  ngOnInit(): void {
    console.log("ngOnInit - value: ", this.myNewNumber);
  }

  ngDoCheck() {
    //debugger;
    console.log("ngDoCheck: ", this.myString);
  }

  ngAfterContentInit(){
    //usefull when you initialized when you need to make a calculation only once in the whole component
    console.log("ngAfterContentInit: ")
  }

  ngAfterContentChecked(){
    //can be executed multiple times after ngDoCheck
    //when we want to execute something after ngDoCheck
    console.log("ngAfterContentChecked, this was executed after ngAfterContentInit")
  }

  ngAfterViewInit(){
    //initialized all variables required
    console.log("ngAfterViewInit: this was executed after ngAfterContentChecked")
  }

  ngAfterViewChecked(){
    //grandchild executed, multiple times
    console.log("ngAfterViewChecked is called!!! : this was executed after ngAfterViewInit")
  }

  ngOnDestroy(){
    //you want to destroy a component on the DOM
    console.log("ngOnDestroy is called!!! : component child.component has been destroyed")
  }
}
