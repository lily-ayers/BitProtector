import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LevelSelectorComponent } from './level-selector/level-selector.component';
import { MapComponent } from './map/map.component';
import { ResolverService } from './resolver.service';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'levels', component: LevelSelectorComponent},
  {path: 'levels/:levelNum', component: MapComponent, resolve: { level: ResolverService }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})

export class AppRoutingModule { }
