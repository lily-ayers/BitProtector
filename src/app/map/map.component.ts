import { Component, OnInit, Input } from '@angular/core';
import { MapGridSquare } from '../map-grid-square';
import { LevelService } from '../level.service';
import { Level } from '../level';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: MapGridSquare[][] = [];
  level: Level;

  constructor(private levelService: LevelService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => this.level = data.level.levels[this.route.snapshot.paramMap.get('levelNum')]);
    for (let y = 0; y < this.level.mapHeight; y++) {
      let width: MapGridSquare[] = [];
      for (let x = 0; x < this.level.mapWidth; x++) {
        width.push({xValue: x, yValue: y, path: this.determinePath(x, y)});
      }
      this.map.push(width);
    }
    console.log(JSON.stringify(this.map));
  }

  determinePath(x: number, y: number) {
    if (this.level.path[x].includes(y)) {
      return true;
    }
    return false;
  }
}
