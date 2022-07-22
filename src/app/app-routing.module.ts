import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MemberComponent } from './member/member.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'member', component: MemberComponent},
  {path: 'recipes', component: RecipeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
