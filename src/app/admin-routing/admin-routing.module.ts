import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const adminRoutes:Routes=[
	// { path:'',component:HomeComponent ,}
];

	@NgModule({
	  imports: [RouterModule.forRoot(adminRoutes)],
	  exports:[RouterModule],
	})
	
export class AdminRoutingModule { }
