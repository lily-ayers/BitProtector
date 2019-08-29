import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  levels: number[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  startLevel(levelNum: number) {
    this.router.navigateByUrl('levels/' + levelNum);
  }
}
