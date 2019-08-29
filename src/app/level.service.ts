import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Level } from './level';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  getLevels(): Observable<Level> {
    return this.http.get<Level>('../assets/levels.json');
  }
}
