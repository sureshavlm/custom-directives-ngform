import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngform-example';

  request =  {};
  statusMsg = "";
  regForm: NgForm;
  salary: number = 60000;
  dob = new Date();
  hidden: boolean = false;

  http: Http;
  products: any;

  constructor(_http: Http) {
    this.http = _http;
  }


  ngOnInit() {
    this.http.request('http://localhost:3000/products').subscribe((res) => {
      this.products = res.json();
      console.log(this.products, " Data Received");
    });
  }



  onFormSubmitted(_myForm: NgForm) {

  	this.regForm = _myForm;

  	this.request = { 
  		username: _myForm.controls["userName"].value,
  		password: _myForm.controls["password"].value,
  		email: _myForm.controls["email"].value
  		};

  	//you invoked a HTTP call and got response
  	this.statusMsg = "Registration successful.";

  	console.log(this.request);
  }
}
