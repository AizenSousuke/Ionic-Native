// Import and export it back so that we can now use this module to import all modules in the @angular/material folder in one line of import
// I.e, 
// import { MaterialModule } from '../material.module';
// ...
// imports: [
//   MaterialModule
// ]


import { NgModule } from '@angular/core';
import { 
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
} from "@angular/material";


@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
