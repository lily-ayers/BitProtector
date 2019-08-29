import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Level } from './level';
import { Observable } from 'rxjs';
import { LevelService } from './level.service';


@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Level> {

  constructor(private levelService: LevelService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Level> {
    return this.levelService.getLevels();
  }
}
