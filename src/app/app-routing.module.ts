import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'client',loadChildren:()=>import('./gestoinClient/gestoin-client.module').then(m=>m.GestoinClientModule)},
  {path:'agency',loadChildren:()=>import('./gestionAgency/gestion-agency.module').then(m=>m.GestionAgencyModule)},
  {path:'circuit',loadChildren:()=>import('./gestionCricuit/circuit.module').then(m=>m.CircuitModule)},
  {path:'activity',loadChildren:()=>import('./activity/activity.module').then(m=>m.ActivityModule)},
  {path:'randonnee',loadChildren:()=>import('./gestionRandonnee/gestion-randonnee.module').then(m=>m.GestionRandonneeModule)},
  {path:'materiel',loadChildren:()=>import('./gestion-materiel/gestion-materiel.module').then(m=>m.GestionMaterielModule)},
  {path:'reservation',loadChildren:()=>import('./reservation/gestion-reservatione.module').then(m=>m.GestionReservationeModule)},
  {path:'blog',loadChildren:()=>import('./gestion-blog/gestion-blog.module').then(m=>m.GestionBlogModule)},
  {path:'commentaire',loadChildren:()=>import('./commentaire/commentaire.module').then(m=>m.CommentaireModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
