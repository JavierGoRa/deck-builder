import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoDeckPage } from './modal-nuevo-deck';

@NgModule({
  declarations: [
    ModalNuevoDeckPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoDeckPage),
  ],
})
export class ModalNuevoDeckPageModule {}
