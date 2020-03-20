import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
         MatInputModule, MatDialogModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgMaterialModule { }
