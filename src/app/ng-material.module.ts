import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatCard, MatNavList,MatListModule, MatList } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [MatToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgMaterialModule { }
