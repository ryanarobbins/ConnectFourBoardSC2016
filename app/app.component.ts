import {Component} from '@angular/core';

export class Board {
grid: string[][];
}



@Component({
    selector: 'my-app',
    templateUrl: '/app/_app.html'
})
export class AppComponent {
  board: Board = {
  grid: [["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",],
  ["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",],
  ["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",],
  ["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",],
  ["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",],
  ["emptySpace", "redSpace", "blackSpace","emptySpace","emptySpace","emptySpace","emptySpace",]]
  }
}
