import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
@Component({
  /*the component CSS element selector
  app-heroes matches the name of the HTML element the IDs this component within a parent components
  */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', /*the location of the component's template file*/
  styleUrls: ['./heroes.component.css'] /*the location of the component's private CSS styles */
})
export class HeroesComponent implements OnInit {
  hero: Hero ={
    id: 1,
    name: 'Robin'
  };
  constructor() { }

  ngOnInit() {
    /*is a lifecycle hook Angular calls shortly after creating a component.  
    It's a good place to put initialization logic. 
    */
  }

}
