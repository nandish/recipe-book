import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  recipe = new Recipe('Dummy', 'Dummy', 'https://tse4.mm.bing.net/th?id=OIP.M1815097ca6dbbe5b76fef34ee0b5d55eH0&pid=15.1')

  constructor() { }

  ngOnInit() {
  }

}
