import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatToolbarModule,
	MatMenuModule,
	MatInputModule,
	MatListModule,
	MatIconModule,
	MatDialogModule,
	MatTableModule,
	MatPaginatorModule,
	MatSelectModule,
	MatCardModule,
	MatExpansionModule,
	MatSnackBarModule,
	MatCheckboxModule,
	MatBottomSheetModule,
	MatProgressSpinnerModule,
	MatBadgeModule,
	MatChipsModule,
	MatGridListModule,
	MatDatepickerModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
	MatButtonModule,
	MatToolbarModule,
	MatMenuModule,
	MatInputModule,
	MatListModule,
	MatIconModule,
	MatDialogModule,
	MatTableModule,
	MatPaginatorModule,
	MatSelectModule,
	MatCardModule,
	MatExpansionModule,
	MatSnackBarModule,
	MatCheckboxModule,
	MatBottomSheetModule,
	MatProgressSpinnerModule,
	MatBadgeModule,
	MatChipsModule,
	MatGridListModule,
	MatDatepickerModule,
	FormsModule,
	ReactiveFormsModule,
	MatTableModule 
];

@NgModule({
	imports: modules,
	exports: modules,
	declarations: [],
})
export class MaterialModule { }