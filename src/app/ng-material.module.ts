import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatNavList, MatListModule, MatList } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgMaterialModule { }
