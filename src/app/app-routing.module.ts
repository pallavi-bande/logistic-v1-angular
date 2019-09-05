import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './main-sidebar/sidebar/location/location-list/location-list.component';
import { NewLocationComponent } from './main-sidebar/sidebar/location/new-location/new-location.component';
import { EditLocationComponent } from './main-sidebar/sidebar/location/location-list/edit-location/edit-location.component';
import { ViewLocationComponent } from './main-sidebar/sidebar/location/location-list/view-location/view-location.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { NewTrailerComponent } from './trailer/new-trailer/new-trailer.component';
import { TrailerlistComponent } from './trailer/trailerlist/trailerlist.component';

const routes: Routes = [
  { path: '', component: ContentHeaderComponent },
  { path: 'NewLocation', component: NewLocationComponent },
  { path: 'LocationList', component: LocationListComponent },
  { path: 'LocationList/edit/:locationId', component: EditLocationComponent },
  { path: 'LocationList/view/:locationId', component: ViewLocationComponent },
  { path: 'UserList', component: UserListComponent},
  { path: 'NewUser', component:AddUserComponent},
  { path: 'NewTrailer', component:NewTrailerComponent},
  { path: 'TrailerList', component: TrailerlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }