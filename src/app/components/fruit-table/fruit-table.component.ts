import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FruitTableViewModel } from './fruit-table-view-model';
import { combineLatestWith, map, Observable } from 'rxjs';
import { Fruit } from 'src/app/models/fruit';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  providers: [FruitTableViewModel]
})
  

export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'calories', 'carbohydrates', 'sugar']; // Add coloumns for carbs and sugar
  // Declare data types here
  fruits$: Observable<Fruit[]>;
  filteredFruits$: Observable<Fruit[]>;
  filter: FormControl;
  filter$: Observable<string>;




  constructor(public viewModel: FruitTableViewModel, public _liveAnnouncer: LiveAnnouncer) {  

    // Declare variables for:
    // Creating new instance of Form Control 
    // Checking for value changes in the text-input
    // Using combineLatestwith, map, and pipe, combine the user inputted obserable and the api data
    
    
    // Issues I am having:
    // errors with types and not having access to api data
    // On the template I don't know how to update the form dynamically however I'm thinking its *ngFor or *ngIf
    // Below is my attempt, however it doesn't check for text in 'genus', 'name', 'family', 'order' specifically because I dont know how to access the data properly
    
    //filtering with text input
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges;
    // this.filteredFruits$ = combineLatestWith(this.viewModel.fruitData$, this.filter$).pipe(
    //   map(([fruits, filterString]) => fruits.filter(fruit => fruit.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    // );
  }

  // This is the method created that is supposed to filter with the dropdown menu
  // However, again I don't know how to affect the form in the html template using Angular
  filterSelector(filterValue : string) {
    if (filterValue == "1") {
      console.log('filter1')
      
    } else if (filterValue == "2") {
      console.log('filter2')
    }
    else if (filterValue == "3") {
      console.log('filter3')
    }
    else if (filterValue == "4") {
      console.log('filter4')
    }
    else if (filterValue == "0") {
      console.log('SHOW ALL')
    }
  }

  ngOnInit(): void {
}
}


// this.viewModel.fruitData$.getValue()[0].genus
