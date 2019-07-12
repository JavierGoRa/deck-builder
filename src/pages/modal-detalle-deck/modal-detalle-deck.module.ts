import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleDeckPage } from './modal-detalle-deck';

@NgModule({
  declarations: [
    ModalDetalleDeckPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleDeckPage),
  ],
})
export class ModalDetalleDeckPageModule {}
