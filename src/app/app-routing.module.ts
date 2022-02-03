import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MapComponent } from './layout/default/map/map.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, 
    children: [
      { path:'', component: DashboardComponent }, 
      { path:'posts', component: PostsComponent },
      { path: 'map', component: MapComponent} 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
