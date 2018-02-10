import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup ,Validators }  from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public fb: FormBuilder) {
  this.createForm(); }

 public signinForm: FormGroup;

  ngOnInit() {
  }
	  protected createForm() {
    this.signinForm = this.fb.group({
        fname:[''],
        lname:[''],
        email:[''],
      });
   }
}
