import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';

const routes: Routes = [
  { path: 'add', component: AddPostComponent },
  { path: 'list', component: ListPostComponent },
  { path: 'edit', component: EditPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
