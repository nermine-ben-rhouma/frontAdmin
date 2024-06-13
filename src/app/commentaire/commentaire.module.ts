import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommentaireComponent
  ],
  imports: [
    CommonModule,
    CommentaireRoutingModule,ClarityModule,ReactiveFormsModule
  ]
})
export class CommentaireModule { }
