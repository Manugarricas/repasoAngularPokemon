import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: "pokemons", component: PokemonComponent, children: [
    {path: "details/:id", component: PokemonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
