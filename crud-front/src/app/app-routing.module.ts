import { MenupageComponent } from './pages/menupage/menupage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  // rotas
  {path: '',component:HomeComponent },//manda para home quando a url estiver vazia
  {path: 'menu', component:MenuComponent},
  {path: 'sobre', component:SobreComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'menu/:id', component:MenupageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
